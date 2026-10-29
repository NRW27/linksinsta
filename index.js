/* Herzen-Zähler – Cloudflare Worker + D1

   GET  /api/hearts  ->  { counts: { p12: 34, ... } }
   POST /api/heart   ->  Body { post: "p12", on: true|false }, Header X-Voter: <Token>
                         Antwort { post, on, n, token? }   (token nur beim allerersten Herz)

   Grundsätze:
   - Der Browser liefert nie eine Zahl, nur "Herz an/aus". Gezählt wird ausschließlich hier.
   - Ein Herz pro Token und Beitrag (Primärschlüssel in der Datenbank).
   - Token sind mit einem Geheimnis signiert und lassen sich nicht erfinden. Neue Token gibt es
     nur begrenzt pro IP und Tag.
   - Läuft ein Tageslimit voll, antwortet der Worker mit 503 + Retry-After; Zahlen kommen dann
     aus dem Backup-Cache.
*/

const POST_RE = /^p\d{1,4}$/;            // erlaubte Beitrags-IDs, z. B. "p12" (anpassen, falls die Nummern anders aussehen)
const MAX_TOKENS_PER_IP_PER_DAY = 10;    // Schulen/Mobilfunk teilen sich IPs: nicht zu knapp wählen
const FRESH_SECONDS = 30;                // so lange gelten die Zähler im Edge-Cache als frisch
const BACKUP_SECONDS = 86400;            // so lange bleibt eine Notkopie für den Fall eines Datenbank-Limits

const enc = new TextEncoder();

/* ---------- kleine Helfer ---------- */

const b64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf)))
  .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64u(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
}

async function makeToken(secret) {
  const id = b64u(crypto.getRandomValues(new Uint8Array(16)));
  return id + '.' + await hmac(secret, 'token:' + id);
}

// Gibt die Voter-ID zurück, wenn das Token echt ist, sonst null.
async function verifyToken(secret, token) {
  const [id, sig] = String(token || '').split('.');
  if (!id || !sig) return null;
  const expected = await hmac(secret, 'token:' + id);
  if (expected.length !== sig.length) return null;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0 ? id : null;
}

const secondsToMidnightUTC = () => {
  const n = new Date();
  return Math.ceil((Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1) - n) / 1000);
};

// Bei einem Datenbankfehler: Ist es das Tageslimit, lohnt Wiederholen erst nach 00:00 UTC.
const retryAfter = err => String(/limit|quota|exceeded/i.test(String(err)) ? secondsToMidnightUTC() : 60);

const withCache = (res, seconds) => {
  const copy = new Response(res.clone().body, res);
  copy.headers.set('Cache-Control', `public, max-age=${seconds}`);
  return copy;
};

/* ---------- Worker ---------- */

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
      'Access-Control-Allow-Headers': 'Content-Type, X-Voter',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    };
    const json = (data, status = 200, headers = {}) =>
      new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...cors, ...headers } });

    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method === 'GET' && url.pathname === '/api/hearts') return getCounts(url, env, ctx, json);
    if (req.method === 'POST' && url.pathname === '/api/heart') return postHeart(req, env, json);
    return json({ error: 'not-found' }, 404);
  },

  // Nachts alte Token-Zähler löschen (Cron, siehe wrangler.toml)
  async scheduled(_event, env) {
    const cutoff = new Date(Date.now() - 2 * 86400000).toISOString().slice(0, 10);
    await env.DB.prepare('DELETE FROM issued WHERE day < ?1').bind(cutoff).run();
  },
};

/* ---------- Zähler lesen (gecacht) ---------- */

async function getCounts(url, env, ctx, json) {
  const cache = caches.default;   // wirkt nur auf eigener Domain/Route, auf *.workers.dev ist es ein No-op
  const freshKey = new Request(url.origin + '/__cache/hearts-fresh');
  const backupKey = new Request(url.origin + '/__cache/hearts-backup');

  const hit = await cache.match(freshKey);
  if (hit) return hit;

  try {
    const { results } = await env.DB.prepare('SELECT post, n FROM counts').all();
    const res = json({ counts: Object.fromEntries(results.map(r => [r.post, r.n])) }, 200,
      { 'Cache-Control': 'public, max-age=60' });   // auch der Browser fragt dann höchstens einmal pro Minute
    ctx.waitUntil(Promise.all([
      cache.put(freshKey, withCache(res, FRESH_SECONDS)),
      cache.put(backupKey, withCache(res, BACKUP_SECONDS)),
    ]));
    return res;
  } catch (err) {
    const old = await cache.match(backupKey);   // Datenbank nicht erreichbar oder Limit erreicht: letzte bekannte Zahlen
    if (old) {
      const copy = new Response(old.body, old);
      copy.headers.set('Cache-Control', 'no-store');
      return copy;
    }
    return json({ error: 'unavailable' }, 503, { 'Retry-After': retryAfter(err) });
  }
}

/* ---------- Herz setzen oder entfernen ---------- */

async function postHeart(req, env, json) {
  // Nur Hygiene: Skripte können den Origin-Header fälschen, normale Browser anderer Seiten nicht.
  if (req.headers.get('Origin') !== env.ALLOWED_ORIGIN) return json({ error: 'origin' }, 403);
  if (Number(req.headers.get('Content-Length')) > 512) return json({ error: 'size' }, 413);

  const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
  if (!(await env.RL_IP.limit({ key: ip })).success) return json({ error: 'rate' }, 429, { 'Retry-After': '60' });

  let body;
  try { body = await req.json(); } catch { return json({ error: 'json' }, 400); }
  const { post, on } = body || {};
  if (typeof post !== 'string' || !POST_RE.test(post) || typeof on !== 'boolean') return json({ error: 'input' }, 400);

  let voter = await verifyToken(env.TOKEN_SECRET, req.headers.get('X-Voter'));
  let newToken = null;

  if (voter && !(await env.RL_VOTER.limit({ key: voter })).success) {
    return json({ error: 'rate' }, 429, { 'Retry-After': '60' });
  }

  try {
    if (!voter) {
      if (!on) return json({ error: 'token' }, 400);   // ohne Token gibt es nichts zu entfernen

      // Neues Token nur begrenzt pro IP und Tag (die IP wird nur als Hash gespeichert)
      const day = new Date().toISOString().slice(0, 10);
      const ipHash = (await hmac(env.TOKEN_SECRET, 'ip:' + ip)).slice(0, 16);
      const row = await env.DB.prepare(
        'INSERT INTO issued(day, ip, n) VALUES(?1, ?2, 1) ON CONFLICT(day, ip) DO UPDATE SET n = n + 1 RETURNING n'
      ).bind(day, ipHash).first();
      if (row.n > MAX_TOKENS_PER_IP_PER_DAY) {
        return json({ error: 'token-limit' }, 429, { 'Retry-After': String(secondsToMidnightUTC()) });
      }
      newToken = await makeToken(env.TOKEN_SECRET);
      voter = newToken.split('.')[0];
    }

    const write = on
      ? env.DB.prepare('INSERT OR IGNORE INTO hearts(voter, post) VALUES(?1, ?2)')
      : env.DB.prepare('DELETE FROM hearts WHERE voter = ?1 AND post = ?2');

    // Schreiben und aktuellen Zähler in einem Rutsch (die Trigger in schema.sql pflegen "counts")
    const [, read] = await env.DB.batch([
      write.bind(voter, post),
      env.DB.prepare('SELECT n FROM counts WHERE post = ?1').bind(post),
    ]);

    return json({ post, on, n: read.results[0]?.n ?? 0, ...(newToken && { token: newToken }) });
  } catch (err) {
    return json({ error: 'unavailable' }, 503, { 'Retry-After': retryAfter(err) });
  }
}
