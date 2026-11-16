/* Zuordnung und Reihenfolge der Beiträge: je Zeile ein Beitrag (Fünfergruppe), Zahlen = Forderungsnummern in Slide-Reihenfolge.
   Quelle: Forderungen-neu.md, Teil II (Fünfergruppen). Der erste Eintrag jeder Gruppe ist der Auftakt. */
const FEED_ORDER = [
  [  1,   2,   6,   7,   3],   // Gute Löhne · Gruppe L01 – Tarife, Löhne und Mitbestimmung
  [  4,   8,   9,  15,  10],   // Gute Löhne · Gruppe L02 – Tarife, Löhne und Mitbestimmung
  [ 16,  17,  18,  19, 187],   // Gute Löhne · Gruppe L03 – Tarife, Löhne und Mitbestimmung
  [  5,  11,  12,  13,  14],   // Gute Löhne · Gruppe L04 – Tarife, Löhne und Mitbestimmung
  [ 21,  22,  24,  25,  26],   // Gute Löhne · Gruppe L05 – Tarife, Löhne und Mitbestimmung
  [ 20,  27,  23,   2,   3],   // Gute Löhne · Gruppe L06 – Tarife, Löhne und Mitbestimmung
  [ 28,  29,  30,  31,  34],   // Gute Löhne · Gruppe L07 – Arbeitszeit und Arbeitsschutz
  [ 35,  32,  33,  39,  40],   // Gute Löhne · Gruppe L08 – Arbeitszeit und Arbeitsschutz
  [ 36,  41, 344,  42,  37],   // Gute Löhne · Gruppe L09 – Arbeitszeit und Arbeitsschutz
  [ 38,  43,  45,  44,  29],   // Gute Löhne · Gruppe L10 – Arbeitszeit und Arbeitsschutz
  [ 46, 290, 309,  59,  60],   // Gute Löhne · Gruppe L11 – Öffentlicher Dienst und Sorgeberufe
  [ 47,  61,  48,  52,  62],   // Gute Löhne · Gruppe L12 – Öffentlicher Dienst und Sorgeberufe
  [ 49,  50,  53,  54,  63],   // Gute Löhne · Gruppe L13 – Öffentlicher Dienst und Sorgeberufe
  [ 51,  55,  64,  65,  66],   // Gute Löhne · Gruppe L14 – Öffentlicher Dienst und Sorgeberufe
  [ 57,  56,  71,  67,  68],   // Gute Löhne · Gruppe L15 – Öffentlicher Dienst und Sorgeberufe
  [ 58,  69,  70, 309,  48],   // Gute Löhne · Gruppe L16 – Öffentlicher Dienst und Sorgeberufe
  [ 72,  73,  74,  75,  76],   // Gute Löhne · Gruppe L17 – Gleichstellung und inklusiver Arbeitsmarkt
  [ 78, 305,  79,  85,  86],   // Gute Löhne · Gruppe L18 – Gleichstellung und inklusiver Arbeitsmarkt
  [ 80, 173,  87,  81,  88],   // Gute Löhne · Gruppe L19 – Gleichstellung und inklusiver Arbeitsmarkt
  [ 77,  89,  90,  91,  82],   // Gute Löhne · Gruppe L20 – Gleichstellung und inklusiver Arbeitsmarkt
  [ 83,  84,  79, 173,  81],   // Gute Löhne · Gruppe L21 – Gleichstellung und inklusiver Arbeitsmarkt
  [ 92,  96,  97,  98, 112],   // Gute Löhne · Gruppe L22 – Ausbildung, Studium und Weiterbildung
  [ 93, 104,  94,  99, 211],   // Gute Löhne · Gruppe L23 – Ausbildung, Studium und Weiterbildung
  [101, 123, 100, 105, 113],   // Gute Löhne · Gruppe L24 – Ausbildung, Studium und Weiterbildung
  [102, 106, 107, 108, 109],   // Gute Löhne · Gruppe L25 – Ausbildung, Studium und Weiterbildung
  [103, 114, 110, 115, 111],   // Gute Löhne · Gruppe L26 – Ausbildung, Studium und Weiterbildung
  [ 95, 116,  94,  96,  97],   // Gute Löhne · Gruppe L27 – Ausbildung, Studium und Weiterbildung
  [117, 391, 118, 119, 123],   // Mobilität für alle · Gruppe M01 – Ticketpreise und Busangebot
  [126, 121, 120, 122, 128],   // Mobilität für alle · Gruppe M02 – Ticketpreise und Busangebot
  [124, 129, 131, 135, 127],   // Mobilität für alle · Gruppe M03 – Ticketpreise und Busangebot
  [125, 130, 132, 133, 134],   // Mobilität für alle · Gruppe M04 – Ticketpreise und Busangebot
  [136, 138, 143, 137, 139],   // Mobilität für alle · Gruppe M05 – Schiene und Wasserwege
  [140, 144, 149, 141, 150],   // Mobilität für alle · Gruppe M06 – Schiene und Wasserwege
  [142, 145, 146, 147, 151],   // Mobilität für alle · Gruppe M07 – Schiene und Wasserwege
  [148, 152, 153, 137, 138],   // Mobilität für alle · Gruppe M08 – Schiene und Wasserwege
  [154, 155, 159, 166, 160],   // Mobilität für alle · Gruppe M09 – Rad, Fuß und Straßenraum
  [156, 161, 162, 163, 157],   // Mobilität für alle · Gruppe M10 – Rad, Fuß und Straßenraum
  [158, 167, 164, 168, 165],   // Mobilität für alle · Gruppe M11 – Rad, Fuß und Straßenraum
  [169, 171, 170, 182, 172],   // Mobilität für alle · Gruppe M12 – Rad, Fuß und Straßenraum
  [174, 173, 179, 175, 176],   // Mobilität für alle · Gruppe M13 – Rad, Fuß und Straßenraum
  [177, 178, 180, 181, 170],   // Mobilität für alle · Gruppe M14 – Rad, Fuß und Straßenraum
  [183, 407, 184, 186,  56],   // Mobilität für alle · Gruppe M15 – Organisation und Finanzierung des Verkehrs
  [185, 187, 189, 190, 188],   // Mobilität für alle · Gruppe M16 – Organisation und Finanzierung des Verkehrs
  [191, 195, 397, 393, 192],   // Mieten deckeln · Gruppe W01 – Mietendeckel und Mietrecht
  [193, 205, 196, 197, 198],   // Mieten deckeln · Gruppe W02 – Mietendeckel und Mietrecht
  [194, 199, 200, 201, 202],   // Mieten deckeln · Gruppe W03 – Mietendeckel und Mietrecht
  [203, 204, 192, 195, 397],   // Mieten deckeln · Gruppe W04 – Mietendeckel und Mietrecht
  [206, 211, 212, 207, 213],   // Mieten deckeln · Gruppe W05 – Sozialer und gemeinnütziger Wohnungsbau
  [208, 209, 210, 216, 219],   // Mieten deckeln · Gruppe W06 – Sozialer und gemeinnütziger Wohnungsbau
  [214, 217, 215, 218, 207],   // Mieten deckeln · Gruppe W07 – Sozialer und gemeinnütziger Wohnungsbau
  [220, 399, 395, 225, 221],   // Mieten deckeln · Gruppe W08 – Boden, Spekulation und Leerstand
  [222, 226, 396, 223, 227],   // Mieten deckeln · Gruppe W09 – Boden, Spekulation und Leerstand
  [224, 228, 398, 229, 230],   // Mieten deckeln · Gruppe W10 – Boden, Spekulation und Leerstand
  [231, 232, 395, 221, 396],   // Mieten deckeln · Gruppe W11 – Boden, Spekulation und Leerstand
  [233, 236, 242, 243, 237],   // Mieten deckeln · Gruppe W12 – Mieter*innenschutz und Rechtsdurchsetzung
  [238, 244, 245, 246, 253],   // Mieten deckeln · Gruppe W13 – Mieter*innenschutz und Rechtsdurchsetzung
  [234, 247, 256, 254, 248],   // Mieten deckeln · Gruppe W14 – Mieter*innenschutz und Rechtsdurchsetzung
  [239, 249, 255, 240, 241],   // Mieten deckeln · Gruppe W15 – Mieter*innenschutz und Rechtsdurchsetzung
  [235, 250, 251, 252, 236],   // Mieten deckeln · Gruppe W16 – Mieter*innenschutz und Rechtsdurchsetzung
  [261, 373, 274, 262, 263],   // Mieten deckeln · Gruppe W17 – Wohnen, Quartier und Barrierefreiheit
  [257, 275, 264, 265, 266],   // Mieten deckeln · Gruppe W18 – Wohnen, Quartier und Barrierefreiheit
  [258, 267, 259, 268, 269],   // Mieten deckeln · Gruppe W19 – Wohnen, Quartier und Barrierefreiheit
  [260, 270, 271, 272, 355],   // Mieten deckeln · Gruppe W20 – Wohnen, Quartier und Barrierefreiheit
  [273, 259, 373, 262, 263],   // Mieten deckeln · Gruppe W21 – Wohnen, Quartier und Barrierefreiheit
  [276, 277, 278, 279, 280],   // Gesundheit vor Ort · Gruppe G01 – Krankenhäuser und Gesundheitssystem
  [283, 282, 281, 288, 284],   // Gesundheit vor Ort · Gruppe G02 – Krankenhäuser und Gesundheitssystem
  [285, 289, 286, 290, 293],   // Gesundheit vor Ort · Gruppe G03 – Krankenhäuser und Gesundheitssystem
  [287, 291, 292, 284, 286],   // Gesundheit vor Ort · Gruppe G04 – Krankenhäuser und Gesundheitssystem
  [294, 300, 301, 302, 296],   // Gesundheit vor Ort · Gruppe G05 – Ambulante und wohnortnahe Versorgung
  [295, 303, 297, 298, 304],   // Gesundheit vor Ort · Gruppe G06 – Ambulante und wohnortnahe Versorgung
  [299, 305, 306, 307, 296],   // Gesundheit vor Ort · Gruppe G07 – Ambulante und wohnortnahe Versorgung
  [308, 317, 310, 311, 312],   // Gesundheit vor Ort · Gruppe G08 – Pflege
  [313, 309, 315, 318, 319],   // Gesundheit vor Ort · Gruppe G09 – Pflege
  [314, 316, 100, 320, 309],   // Gesundheit vor Ort · Gruppe G10 – Pflege
  [321, 324, 325, 333, 334],   // Gesundheit vor Ort · Gruppe G11 – Psychische Gesundheit
  [322, 343, 326, 335, 344],   // Gesundheit vor Ort · Gruppe G12 – Psychische Gesundheit
  [327, 345, 346, 336, 337],   // Gesundheit vor Ort · Gruppe G13 – Psychische Gesundheit
  [328, 338, 339, 329, 330],   // Gesundheit vor Ort · Gruppe G14 – Psychische Gesundheit
  [323, 340, 341, 342, 331],   // Gesundheit vor Ort · Gruppe G15 – Psychische Gesundheit
  [332, 324, 325, 326, 329],   // Gesundheit vor Ort · Gruppe G16 – Psychische Gesundheit
  [347, 361, 354, 348, 349],   // Gesundheit vor Ort · Gruppe G17 – Drogen- und Suchtpolitik
  [350, 351, 362, 355, 363],   // Gesundheit vor Ort · Gruppe G18 – Drogen- und Suchtpolitik
  [352, 356, 357, 358, 359],   // Gesundheit vor Ort · Gruppe G19 – Drogen- und Suchtpolitik
  [353, 360, 364, 348, 349],   // Gesundheit vor Ort · Gruppe G20 – Drogen- und Suchtpolitik
  [365, 371, 366, 372, 382],   // Gesundheit vor Ort · Gruppe G21 – Prävention, Hitzeschutz, Frauen- und queere Gesundheit
  [374, 373, 375, 383, 376],   // Gesundheit vor Ort · Gruppe G22 – Prävention, Hitzeschutz, Frauen- und queere Gesundheit
  [367, 384, 377, 378, 385],   // Gesundheit vor Ort · Gruppe G23 – Prävention, Hitzeschutz, Frauen- und queere Gesundheit
  [368, 386, 369, 379, 370],   // Gesundheit vor Ort · Gruppe G24 – Prävention, Hitzeschutz, Frauen- und queere Gesundheit
  [380, 381, 387, 366, 369],   // Gesundheit vor Ort · Gruppe G25 – Prävention, Hitzeschutz, Frauen- und queere Gesundheit
  [388, 389, 390, 188, 396],   // Tax the Rich · Gruppe T01 – Vermögen, Einkommen und Immobilien
  [394, 391, 393, 399, 395],   // Tax the Rich · Gruppe T02 – Vermögen, Einkommen und Immobilien
  [392, 397, 398, 389, 390],   // Tax the Rich · Gruppe T03 – Vermögen, Einkommen und Immobilien
  [400, 402, 403, 401, 404],   // Tax the Rich · Gruppe T04 – Steuerfahndung und Konzerne
  [406, 405, 409, 408, 407],   // Tax the Rich · Gruppe T05 – Steuerfahndung und Konzerne
  [410, 401, 407, 402, 403],   // Tax the Rich · Gruppe T06 – Steuerfahndung und Konzerne
  [411, 418, 415, 413, 416],   // Weitere Forderungen · Gruppe X01 – Kommunalfinanzen und Landeshaushalt
  [412, 417, 414, 413, 415],   // Weitere Forderungen · Gruppe X02 – Kommunalfinanzen und Landeshaushalt
  [419, 420, 425, 426, 421],   // Weitere Forderungen · Gruppe X03 – Daseinsvorsorge und öffentliches Eigentum
  [422, 423, 424, 420, 421],   // Weitere Forderungen · Gruppe X04 – Daseinsvorsorge und öffentliches Eigentum
  [428, 441, 429, 434, 435],   // Weitere Forderungen · Gruppe X05 – Industriepolitik und Wirtschaftsdemokratie
  [430, 438, 439, 436, 437],   // Weitere Forderungen · Gruppe X06 – Industriepolitik und Wirtschaftsdemokratie
  [431, 440, 442, 432, 433],   // Weitere Forderungen · Gruppe X07 – Industriepolitik und Wirtschaftsdemokratie
  [427, 429, 432, 433, 434],   // Weitere Forderungen · Gruppe X08 – Industriepolitik und Wirtschaftsdemokratie
  [443, 457, 445, 449, 446],   // Weitere Forderungen · Gruppe X09 – Kitas
  [447, 450, 451, 452, 458],   // Weitere Forderungen · Gruppe X10 – Kitas
  [444, 448, 453, 459, 454],   // Weitere Forderungen · Gruppe X11 – Kitas
  [455, 460, 461, 456, 445],   // Weitere Forderungen · Gruppe X12 – Kitas
  [462, 468, 469, 474, 463],   // Weitere Forderungen · Gruppe X13 – Schulen
  [464, 475, 470, 476, 465],   // Weitere Forderungen · Gruppe X14 – Schulen
  [466, 477, 478, 479, 471],   // Weitere Forderungen · Gruppe X15 – Schulen
  [472, 473, 486, 487, 492],   // Weitere Forderungen · Gruppe X16 – Schulen
  [467, 480, 493, 488, 481],   // Weitere Forderungen · Gruppe X17 – Schulen
  [482, 494, 483, 489, 490],   // Weitere Forderungen · Gruppe X18 – Schulen
  [484, 485, 491, 463, 465],   // Weitere Forderungen · Gruppe X19 – Schulen
  [495, 500, 507, 501, 496],   // Weitere Forderungen · Gruppe X20 – Hochschulen und Weiterbildung
  [497, 502, 508, 509, 503],   // Weitere Forderungen · Gruppe X21 – Hochschulen und Weiterbildung
  [498, 511, 504, 512, 505],   // Weitere Forderungen · Gruppe X22 – Hochschulen und Weiterbildung
  [499, 510, 513, 506, 496],   // Weitere Forderungen · Gruppe X23 – Hochschulen und Weiterbildung
  [514, 526, 527, 518, 528],   // Weitere Forderungen · Gruppe X24 – Kinder, Jugend und Familie
  [515, 519, 516, 529, 530],   // Weitere Forderungen · Gruppe X25 – Kinder, Jugend und Familie
  [520, 536, 531, 521, 522],   // Weitere Forderungen · Gruppe X26 – Kinder, Jugend und Familie
  [517, 523, 537, 524, 532],   // Weitere Forderungen · Gruppe X27 – Kinder, Jugend und Familie
  [533, 534, 535, 538, 539],   // Weitere Forderungen · Gruppe X28 – Kinder, Jugend und Familie
  [540, 525, 542, 541, 543],   // Weitere Forderungen · Gruppe X29 – Kinder, Jugend und Familie
  [544, 516, 518, 519, 521],   // Weitere Forderungen · Gruppe X30 – Kinder, Jugend und Familie
  [545, 551, 546, 552, 553],   // Weitere Forderungen · Gruppe X31 – Armut, Rente und Senior*innen
  [547, 554, 548, 549, 550],   // Weitere Forderungen · Gruppe X32 – Armut, Rente und Senior*innen
  [556, 555, 558, 559, 560],   // Weitere Forderungen · Gruppe X33 – Armut, Rente und Senior*innen
  [557, 561, 562, 546, 548],   // Weitere Forderungen · Gruppe X34 – Armut, Rente und Senior*innen
  [563, 574, 582, 566, 567],   // Weitere Forderungen · Gruppe X35 – Inklusion und Barrierefreiheit
  [568, 583, 575, 584, 586],   // Weitere Forderungen · Gruppe X36 – Inklusion und Barrierefreiheit
  [569, 576, 577, 578, 585],   // Weitere Forderungen · Gruppe X37 – Inklusion und Barrierefreiheit
  [570, 579, 571, 587, 580],   // Weitere Forderungen · Gruppe X38 – Inklusion und Barrierefreiheit
  [564, 572, 565, 581, 573],   // Weitere Forderungen · Gruppe X39 – Inklusion und Barrierefreiheit
  [588, 565, 566, 567, 571],   // Weitere Forderungen · Gruppe X40 – Inklusion und Barrierefreiheit
  [589, 590, 595, 596, 597],   // Weitere Forderungen · Gruppe X41 – Gleichstellung, Gewaltschutz und queeres Leben
  [591, 598, 599, 592, 600],   // Weitere Forderungen · Gruppe X42 – Gleichstellung, Gewaltschutz und queeres Leben
  [603, 593, 594, 601, 602],   // Weitere Forderungen · Gruppe X43 – Gleichstellung, Gewaltschutz und queeres Leben
  [607, 604, 610, 611, 608],   // Weitere Forderungen · Gruppe X44 – Gleichstellung, Gewaltschutz und queeres Leben
  [605, 606, 612, 620, 621],   // Weitere Forderungen · Gruppe X45 – Gleichstellung, Gewaltschutz und queeres Leben
  [613, 623, 614, 624, 622],   // Weitere Forderungen · Gruppe X46 – Gleichstellung, Gewaltschutz und queeres Leben
  [615, 616, 617, 618, 619],   // Weitere Forderungen · Gruppe X47 – Gleichstellung, Gewaltschutz und queeres Leben
  [609, 606, 590, 608, 592],   // Weitere Forderungen · Gruppe X48 – Gleichstellung, Gewaltschutz und queeres Leben
  [625, 628, 638, 639, 640],   // Weitere Forderungen · Gruppe X49 – Migration und Flucht
  [629, 641, 630, 642, 651],   // Weitere Forderungen · Gruppe X50 – Migration und Flucht
  [631, 643, 644, 652, 632],   // Weitere Forderungen · Gruppe X51 – Migration und Flucht
  [633, 645, 646, 656, 647],   // Weitere Forderungen · Gruppe X52 – Migration und Flucht
  [634, 653, 654, 635, 648],   // Weitere Forderungen · Gruppe X53 – Migration und Flucht
  [626, 649, 655, 636, 650],   // Weitere Forderungen · Gruppe X54 – Migration und Flucht
  [627, 637, 628, 630, 632],   // Weitere Forderungen · Gruppe X55 – Migration und Flucht
  [657, 659, 665, 674, 666],   // Weitere Forderungen · Gruppe X56 – Antidiskriminierung und Antirassismus
  [667, 668, 669, 675, 670],   // Weitere Forderungen · Gruppe X57 – Antidiskriminierung und Antirassismus
  [658, 660, 661, 662, 663],   // Weitere Forderungen · Gruppe X58 – Antidiskriminierung und Antirassismus
  [664, 671, 672, 673, 659],   // Weitere Forderungen · Gruppe X59 – Antidiskriminierung und Antirassismus
  [676, 677, 690, 686, 678],   // Weitere Forderungen · Gruppe X60 – Demokratie und Beteiligung
  [679, 681, 691, 680, 682],   // Weitere Forderungen · Gruppe X61 – Demokratie und Beteiligung
  [683, 687, 684, 685, 688],   // Weitere Forderungen · Gruppe X62 – Demokratie und Beteiligung
  [689, 677, 678, 680, 681],   // Weitere Forderungen · Gruppe X63 – Demokratie und Beteiligung
  [692, 701, 732, 693, 713],   // Weitere Forderungen · Gruppe X64 – Polizei, Justiz und Sicherheit
  [694, 714, 715, 702, 716],   // Weitere Forderungen · Gruppe X65 – Polizei, Justiz und Sicherheit
  [695, 703, 704, 717, 696],   // Weitere Forderungen · Gruppe X66 – Polizei, Justiz und Sicherheit
  [697, 705, 718, 727, 719],   // Weitere Forderungen · Gruppe X67 – Polizei, Justiz und Sicherheit
  [698, 706, 707, 708, 699],   // Weitere Forderungen · Gruppe X68 – Polizei, Justiz und Sicherheit
  [709, 720, 728, 729, 710],   // Weitere Forderungen · Gruppe X69 – Polizei, Justiz und Sicherheit
  [700, 721, 730, 711, 722],   // Weitere Forderungen · Gruppe X70 – Polizei, Justiz und Sicherheit
  [712, 723, 731, 724, 725],   // Weitere Forderungen · Gruppe X71 – Polizei, Justiz und Sicherheit
  [726, 693, 696, 699, 701],   // Weitere Forderungen · Gruppe X72 – Polizei, Justiz und Sicherheit
  [733, 742, 735, 736, 737],   // Weitere Forderungen · Gruppe X73 – Frieden und Abrüstung
  [734, 738, 743, 739, 744],   // Weitere Forderungen · Gruppe X74 – Frieden und Abrüstung
  [740, 741, 745, 746, 747],   // Weitere Forderungen · Gruppe X75 – Frieden und Abrüstung
  [748, 735, 736, 737, 738],   // Weitere Forderungen · Gruppe X76 – Frieden und Abrüstung
  [749, 753, 766, 767, 754],   // Weitere Forderungen · Gruppe X77 – Digitalisierung und Datenschutz
  [755, 768, 769, 756, 770],   // Weitere Forderungen · Gruppe X78 – Digitalisierung und Datenschutz
  [750, 771, 757, 772, 758],   // Weitere Forderungen · Gruppe X79 – Digitalisierung und Datenschutz
  [751, 759, 773, 774, 784],   // Weitere Forderungen · Gruppe X80 – Digitalisierung und Datenschutz
  [760, 775, 785, 791, 761],   // Weitere Forderungen · Gruppe X81 – Digitalisierung und Datenschutz
  [776, 786, 792, 777, 778],   // Weitere Forderungen · Gruppe X82 – Digitalisierung und Datenschutz
  [752, 793, 787, 779, 788],   // Weitere Forderungen · Gruppe X83 – Digitalisierung und Datenschutz
  [762, 780, 763, 764, 781],   // Weitere Forderungen · Gruppe X84 – Digitalisierung und Datenschutz
  [765, 789, 782, 783, 790],   // Weitere Forderungen · Gruppe X85 – Digitalisierung und Datenschutz
  [794, 798, 799, 807, 800],   // Weitere Forderungen · Gruppe X86 – Kultur und Medien
  [801, 808, 809, 810, 817],   // Weitere Forderungen · Gruppe X87 – Kultur und Medien
  [795, 802, 818, 803, 811],   // Weitere Forderungen · Gruppe X88 – Kultur und Medien
  [796, 819, 804, 812, 823],   // Weitere Forderungen · Gruppe X89 – Kultur und Medien
  [797, 813, 820, 805, 814],   // Weitere Forderungen · Gruppe X90 – Kultur und Medien
  [806, 815, 816, 821, 822],   // Weitere Forderungen · Gruppe X91 – Kultur und Medien
  [824, 825, 829, 826, 827],   // Weitere Forderungen · Gruppe X92 – Kultur und Medien
  [828, 830, 831, 825, 798],   // Weitere Forderungen · Gruppe X93 – Kultur und Medien
  [833, 838, 846, 839, 834],   // Weitere Forderungen · Gruppe X94 – Sport, Ehrenamt und Vereine
  [840, 841, 842, 843, 844],   // Weitere Forderungen · Gruppe X95 – Sport, Ehrenamt und Vereine
  [835, 847, 853, 848, 849],   // Weitere Forderungen · Gruppe X96 – Sport, Ehrenamt und Vereine
  [832, 845, 836, 837, 850],   // Weitere Forderungen · Gruppe X97 – Sport, Ehrenamt und Vereine
  [851, 852, 854, 855, 834],   // Weitere Forderungen · Gruppe X98 – Sport, Ehrenamt und Vereine
  [856, 857, 858, 860, 861],   // Weitere Forderungen · Gruppe X99 – Ländlicher Raum
  [859, 870, 860, 861, 864],   // Weitere Forderungen · Gruppe X100 – Klimaschutz und Klimaanpassung
  [862, 868, 871, 865, 869],   // Weitere Forderungen · Gruppe X101 – Klimaschutz und Klimaanpassung
  [863, 866, 867, 860, 861],   // Weitere Forderungen · Gruppe X102 – Klimaschutz und Klimaanpassung
  [872, 874, 886, 879, 880],   // Weitere Forderungen · Gruppe X103 – Energie und Atompolitik
  [873, 881, 882, 875, 883],   // Weitere Forderungen · Gruppe X104 – Energie und Atompolitik
  [876, 887, 888, 889, 877],   // Weitere Forderungen · Gruppe X105 – Energie und Atompolitik
  [878, 890, 884, 885, 891],   // Weitere Forderungen · Gruppe X106 – Energie und Atompolitik
  [892, 893, 894, 895, 896],   // Weitere Forderungen · Gruppe X107 – Energie und Atompolitik
  [897, 893, 874, 875, 877],   // Weitere Forderungen · Gruppe X108 – Energie und Atompolitik
  [900, 908, 909, 917, 901],   // Weitere Forderungen · Gruppe X109 – Natur- und Umweltschutz
  [898, 918, 910, 925, 919],   // Weitere Forderungen · Gruppe X110 – Natur- und Umweltschutz
  [902, 920, 903, 926, 911],   // Weitere Forderungen · Gruppe X111 – Natur- und Umweltschutz
  [904, 927, 912, 921, 905],   // Weitere Forderungen · Gruppe X112 – Natur- und Umweltschutz
  [906, 922, 928, 923, 913],   // Weitere Forderungen · Gruppe X113 – Natur- und Umweltschutz
  [899, 914, 915, 924, 929],   // Weitere Forderungen · Gruppe X114 – Natur- und Umweltschutz
  [907, 916, 930, 901, 903],   // Weitere Forderungen · Gruppe X115 – Natur- und Umweltschutz
  [933, 934, 935, 936, 937],   // Weitere Forderungen · Gruppe X116 – Landwirtschaft und Tierschutz
  [931, 940, 932, 938, 941],   // Weitere Forderungen · Gruppe X117 – Landwirtschaft und Tierschutz
  [942, 939, 943, 944, 947],   // Weitere Forderungen · Gruppe X118 – Landwirtschaft und Tierschutz
  [945, 948, 954, 946, 949],   // Weitere Forderungen · Gruppe X119 – Landwirtschaft und Tierschutz
  [950, 955, 951, 956, 952],   // Weitere Forderungen · Gruppe X120 – Landwirtschaft und Tierschutz
  [953, 957, 932, 943, 944],   // Weitere Forderungen · Gruppe X121 – Landwirtschaft und Tierschutz
];
