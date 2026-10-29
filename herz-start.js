// TESTWERTE für den Herzen-Zähler: meine Schätzung nach Beliebtheit und Dringlichkeit, keine Messwerte.
// Angezeigt wird: Startwert des Beitrags + von Besuchern vergebene Herzen.
// Schlüssel: 'p' + Nummer der Forderung. Ein Beitrag (fünf Forderungen) nutzt den Mittelwert seiner Forderungen;
// index.html streckt die Beitragswerte danach auf 11 bis 199.
// Vor der Veröffentlichung leeren (const HERZ_START = {};) oder durch echte Zahlen ersetzen.
const HERZ_START = {
  // Gute Löhne
  p1: 196, p2: 100, p3: 110, p4: 87, p5: 156, p6: 102, p7: 54, p8: 88, p9: 64, p10: 110,
  p11: 87, p12: 119, p13: 126, p14: 47, p15: 60, p16: 47, p17: 50, p18: 92, p19: 127, p20: 58,
  p21: 47, p22: 119, p23: 70, p24: 82, p25: 15, p26: 171, p27: 78, p28: 163, p29: 84,
  // Mobilität für alle
  p30: 193, p31: 152, p32: 98, p33: 87, p34: 64, p35: 109, p36: 77, p37: 102, p38: 109, p39: 44,
  // Mieten deckeln
  p40: 162, p41: 133, p42: 146, p43: 98, p44: 72, p45: 104, p46: 86, p47: 134, p48: 37,
  // Gesundheit vor Ort
  p49: 140, p50: 96, p51: 163, p52: 87, p53: 68, p54: 142, p55: 60, p56: 99, p57: 148, p58: 144,
  p59: 125, p60: 92, p61: 62, p62: 44, p63: 105, p64: 97, p65: 62, p66: 60, p67: 156, p68: 135,
  p69: 120, p70: 154, p71: 121, p72: 99, p73: 113, p74: 84, p75: 60, p76: 86, p77: 58, p78: 70,
  p79: 113, p80: 66, p81: 40, p82: 96,
  // Tax the Rich
  p83: 193, p84: 123, p85: 154, p86: 140, p87: 152, p88: 89, p89: 107, p90: 82, p91: 112, p92: 16,
  p93: 41, p94: 78,
  // Weitere Forderungen
  p95: 118, p96: 40, p97: 77, p98: 44, p99: 84, p100: 123, p101: 90, p102: 56, p103: 90, p104: 110,
  p105: 148, p106: 40, p107: 40, p108: 17, p109: 35, p110: 26, p111: 27, p112: 23, p113: 40, p114: 66,
  p115: 19, p116: 134, p117: 66, p118: 80, p119: 64, p120: 22, p121: 42, p122: 28, p123: 90, p124: 117,
  p125: 150, p126: 171, p127: 161, p128: 152, p129: 144, p130: 104, p131: 91, p132: 62, p133: 91, p134: 106,
  p135: 104, p136: 77, p137: 46, p138: 50, p139: 70, p140: 66, p141: 124, p142: 32, p143: 77, p144: 36,
  p145: 93, p146: 93, p147: 70, p148: 38, p149: 106, p150: 129, p151: 54, p152: 92, p153: 85, p154: 44,
  p155: 92, p156: 84, p157: 91, p158: 102, p159: 68, p160: 64, p161: 44, p162: 43, p163: 66, p164: 78,
  p165: 42, p166: 58, p167: 38, p168: 88, p169: 40, p170: 91, p171: 132, p172: 85, p173: 60, p174: 64,
  p175: 84, p176: 66, p177: 93, p178: 22, p179: 68, p180: 168,
};
