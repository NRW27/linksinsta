// Reihenfolge des Feeds – von Hand editierbar; build.py überschreibt diese Datei nie.
// Jede Zeile = ein Beitrag (von oben nach unten im Feed).
// Die Zahlen sind Forderungsnummern = Bilder des Beitrags (Reihenfolge = Wischreihenfolge).
//   Beiträge umsortieren: Zeilen verschieben.
//   Neu gruppieren:       Zahlen zwischen Zeilen verschieben (Beiträge dürfen beliebig viele Bilder haben).
//   Ausblenden:           Zahl oder Zeile löschen (die Seite meldet das in der Browser-Konsole).
const FEED_ORDER = [
  [  1,   2,   3,   4,   5],  // Gute Löhne
  [  6,   7,   8,   9,  10],  // Gute Löhne
  [ 11,  12,  13,  14,  15],  // Gute Löhne
  [ 16,  17,  18,  19,  20],  // Gute Löhne
  [ 21,  22,  23,  24,  25],  // Gute Löhne
  [ 26,  27,  28,  29,  30],  // Gute Löhne / Mobilität für alle
  [ 31,  32,  33,  34,  35],  // Mobilität für alle
  [ 36,  37,  38,  39,  40],  // Mobilität für alle / Mieten deckeln
  [ 41,  42,  43,  44,  45],  // Mieten deckeln
  [ 46,  47,  48,  49,  50],  // Mieten deckeln / Gesundheit vor Ort
  [ 51,  52,  53,  54,  55],  // Gesundheit vor Ort
  [ 56,  57,  58,  59,  60],  // Gesundheit vor Ort
  [ 61,  62,  63,  64,  65],  // Gesundheit vor Ort
  [ 66,  67,  68,  69,  70],  // Gesundheit vor Ort
  [ 71,  72,  73,  74,  75],  // Gesundheit vor Ort
  [ 76,  77,  78,  79,  80],  // Gesundheit vor Ort
  [ 81,  82,  83,  84,  85],  // Gesundheit vor Ort / Tax the Rich
  [ 86,  87,  88,  89,  90],  // Tax the Rich
  [ 91,  92,  93,  94,  95],  // Tax the Rich / Nicht eindeutig zuordenbar
  [ 96,  97,  98,  99, 100],  // Nicht eindeutig zuordenbar
  [101, 102, 103, 104, 105],  // Nicht eindeutig zuordenbar
  [106, 107, 108, 109, 110],  // Nicht eindeutig zuordenbar
  [111, 112, 113, 114, 115],  // Nicht eindeutig zuordenbar
  [116, 117, 118, 119, 120],  // Nicht eindeutig zuordenbar
  [121, 122, 123, 124, 125],  // Nicht eindeutig zuordenbar
  [126, 127, 128, 129, 130],  // Nicht eindeutig zuordenbar
  [131, 132, 133, 134, 135],  // Nicht eindeutig zuordenbar
  [136, 137, 138, 139, 140],  // Nicht eindeutig zuordenbar
  [141, 142, 143, 144, 145],  // Nicht eindeutig zuordenbar
  [146, 147, 148, 149, 150],  // Nicht eindeutig zuordenbar
  [151, 152, 153, 154, 155],  // Nicht eindeutig zuordenbar
  [156, 157, 158, 159, 160],  // Nicht eindeutig zuordenbar
  [161, 162, 163, 164, 165],  // Nicht eindeutig zuordenbar
  [166, 167, 168, 169, 170],  // Nicht eindeutig zuordenbar
  [171, 172, 173, 174, 175],  // Nicht eindeutig zuordenbar
  [176, 177, 178, 179, 180],  // Nicht eindeutig zuordenbar
];
