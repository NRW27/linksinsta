-- Herzen-Zähler: Schema für Cloudflare D1
-- Einspielen:  npx wrangler d1 execute herzen --remote --file=schema.sql

-- Ein Herz = eine Zeile. Der Primärschlüssel (voter, post) verhindert doppelte Herzen.
-- WITHOUT ROWID: pro Herz wird nur 1 Zeile geschrieben (spart Tageskontingent).
CREATE TABLE IF NOT EXISTS hearts (
  voter TEXT NOT NULL,                              -- ID aus dem vom Worker signierten Token
  post  TEXT NOT NULL,                              -- z. B. "p12"
  t     INTEGER NOT NULL DEFAULT (unixepoch()),     -- Zeitpunkt, um Auffälligkeiten später auszuwerten
  PRIMARY KEY (voter, post)
) WITHOUT ROWID;

-- Fertige Zähler: Die Seite liest nur diese kleine Tabelle, nie COUNT(*) über alle Herzen.
CREATE TABLE IF NOT EXISTS counts (
  post TEXT PRIMARY KEY,
  n    INTEGER NOT NULL DEFAULT 0
) WITHOUT ROWID;

-- Wie viele neue Token pro Tag und (gehashter) IP ausgegeben wurden. Wird nachts aufgeräumt.
CREATE TABLE IF NOT EXISTS issued (
  day TEXT NOT NULL,                                -- "2026-10-28" (UTC)
  ip  TEXT NOT NULL,                                -- HMAC-Hash, nie die echte IP
  n   INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, ip)
) WITHOUT ROWID;

-- Zähler werden von der Datenbank selbst gepflegt: atomar, nicht aus dem Worker-Code heraus.
CREATE TRIGGER IF NOT EXISTS hearts_ins AFTER INSERT ON hearts
BEGIN
  INSERT INTO counts(post, n) VALUES (NEW.post, 1)
  ON CONFLICT(post) DO UPDATE SET n = n + 1;
END;

CREATE TRIGGER IF NOT EXISTS hearts_del AFTER DELETE ON hearts
BEGIN
  UPDATE counts SET n = n - 1 WHERE post = OLD.post;
END;
