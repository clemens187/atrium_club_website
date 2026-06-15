/*
  ============================================
  ATRIUM CLUB — EVENT-DATEN
  ============================================
  Hier neue Events einfach oben in das jeweilige
  Array (UPCOMING_EVENTS oder PAST_EVENTS) einfügen.

  Feld-Erklärung:
  - id:        eindeutiger String (z.B. "2026-08-15-summer-night")
  - title:     Eventname
  - date:      Datum als Text, z.B. "15.08.2026"
  - dateSort:  Datum im Format "YYYY-MM-DD" (wichtig für Sortierung!)
  - time:      Uhrzeit, z.B. "21:00 Uhr"
  - dj:        DJ / Act
  - tag:       kurzes Schlagwort, z.B. "House", "90s", "Live"
  - poster:    Bildpfad zum Poster (Bild in den Ordner "images" legen)
  - description: Langtext für die Detailansicht
  - ticketLink: optional, Link zu Tickets/Facebook-Event (kann leer "" sein)

  Um ein Event von "kommend" zu "vergangen" zu verschieben,
  einfach das ganze Objekt von UPCOMING_EVENTS ausschneiden
  und oben in PAST_EVENTS einfügen.
*/

const UPCOMING_EVENTS = [
  {
    id: "2026-06-27-italo-disco-night",
    title: "Italo Disco Night",
    date: "27.06.2026",
    dateSort: "2026-06-27",
    time: "21:00 Uhr",
    dj: "DJ NIKVANP.",
    tag: "Italo Disco",
    poster: "events/20260627_italodisco.webp",
    description: "Die Summer Dance Night eröffnet die warme Jahreszeit im ATRIUM. DJ Duschko sorgt ab 21:00 Uhr für sommerliche Party-Stimmung — von Charts über House bis zu den Sommerhits der letzten Jahre. Türen öffnen, Bass läuft, die Nacht ist lang. Schau unbedingt vorbei!",
    ticketLink: ""
  },
  {
    id: "2026-08-18-zwettler-rasen-open",
    title: "Zwettler Rasen Open",
    date: "18.07.2026",
    dateSort: "2026-07-18",
    time: "21:00 Uhr",
    dj: "DJ NIKVANP.",
    tag: "90s / 00s",
    poster: "events/20260718_zwettler_rasen_open.webp",
    description: "DJ Nik van P. bringt Urlaubsfeeling ab 21.00 Uhr ins ATRIUM! Einlass ab 20.00 Uhr - Eintritt FREI! Kommt und tanzt wie die jungen RÖMER!",
    ticketLink: ""
  }
];

const PAST_EVENTS = [
  {
    id: "2026-06-13-summer-dance-night",
    title: "Summer Dance Night",
    date: "13.06.2026",
    dateSort: "2026-06-13",
    time: "21:00 Uhr",
    dj: "DJ DUSCHKO",
    tag: "Summer",
    poster: "events/20260613_summer_dance_night.webp",
    description: "Am 13.06. geht es bei uns rund bei der Summer-Dance Night☀️🪩DJ DUSCHKO wird ab 21:00 Uhr für sommerliche Party-Stimmung sorgen. Schau unbedingt vorbei🎉",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ CHRIS",
    tag: "Kult Edition",
    poster: "events/20260530_kult_dance_night.webp",
    description: "Verpasse bloß nicht die KULT DANCE NIGHT mit DJ CHRIS! Feier den Abend mit ein paar Freunden und genießt die Stimmung🪩",
    ticketLink: ""
  },
  {
    id: "2026-05-09-muttertag-disco-fox-night",
    title: "Muttertag-Disco + FOX Night",
    date: "09.05.2026",
    dateSort: "2026-05-09",
    time: "20:00",
    dj: "DJ SCHMUCKI",
    tag: "Muttertag",
    poster: "events/20260509_muttertag_disco_fox_night.webp",
    description: "Feier am 09. Mai den Muttertag bei uns. DJ Schmucki sorgt für eine tolle Stimmung und einen schönen Abend🪩",
    ticketLink: ""
  },
  {
    id: "2026-04-11-disco-dance-night",
    title: "Disco Dance Night",
    date: "11.04.2026",
    dateSort: "2026-04-11",
    time: "20:00",
    dj: "DJ NIKVANP.",
    tag: "Disco",
    poster: "events/20260411_disco_dance_night.webp",
    description: "Top Disco-Hits mit DJ NIKVANP. bei uns im Atrium Club. Das Event darfst du dir nicht entgehen lassen!🪩🥂",
    ticketLink: ""
  },
  {
    id: "2026-03-28-oldie-schlager-nacht",
    title: "Oldie & Schlager-Nacht",
    date: "28.03.2026",
    dateSort: "2026-03-28",
    time: "20:00",
    dj: "DJ DUSCHKO",
    tag: "Oldie",
    poster: "events/20260328_oldie_schlager_nacht.webp",
    description: "Genieße den Abend mit Freunden und den besten Schlager-Songs mit DJ DUSCHKO!🪩🎶",
    ticketLink: ""
  },
  {
    id: "2026-03-21-disco-und-fox-night",
    title: "Disco- und FOX-Night",
    date: "21.03.2026",
    dateSort: "2026-03-21",
    time: "20:00",
    dj: "DJ SCHMUCKI",
    tag: "Disco & FOX",
    poster: "events/20260321_disco_fox_night.webp",
    description: "DJ SCHMUCKI sorgt für die besten Disco- und FOX-Hits an dem Abend. Lass es dir bloß nicht entgehen!🎊🪩",
    ticketLink: ""
  },
  {
    id: "2026-03-14-disco-dance-night",
    title: "Disco Dance Night",
    date: "14.03.2026",
    dateSort: "2026-03-14",
    time: "20:00",
    dj: "DJ NIKVANP.",
    tag: "Disco",
    poster: "events/20260314_disco_dance_night.webp",
    description: "Mit DJ NikVanP. bei uns im Atrium Club. Schau vorbei und lass uns gemeinsam feiern!🪩",
    ticketLink: ""
  },
  {
    id: "2026-02-februar-im-atrium",
    title: "Februar 2026 im Atrium",
    date: "Februar 2026",
    dateSort: "2026-02-01",
    time: "Siehe Plakat",
    dj: "DJ CHRIS, DJ NIKVANP.",
    tag: "Fasching",
    poster: "events/20260200_februar.webp",
    description: "Der Kinderfasching, die Faschings- & Valentinstag-DANCE-NIGHT, die Faschings-PARTY und das KULT-Dance-Clubbing sind unsere Events im Februar. Lasst uns gemeinsam richtig feiern🎉🪩",
    ticketLink: ""
  },
  {
    id: "2026-02-14-kinderfasching",
    title: "Kinderfasching",
    date: "14.02.2026",
    dateSort: "2026-02-14",
    time: "14:00 Uhr",
    dj: "",
    tag: "Kinderfasching",
    poster: "events/20260214_kinderfasching.webp",
    description: "Schau am 14. Februar ab 14 Uhr mit der ganzen Familie vorbei beim Atrium Kinderfasching🎊",
    ticketLink: ""
  },
  {
    id: "2026-01-24-disco-dance-night",
    title: "Disco Dance Night",
    date: "24.01.2026",
    dateSort: "2026-01-24",
    time: "20:00",
    dj: "DJ NIKVANP.",
    tag: "Disco",
    poster: "events/20260124_disco_dance_night.webp",
    description: "Schau am 24. Jänner bei uns vorbei um die Dicso Dance Night mit NikVanP nicht zu verpassen!🪩🎶",
    ticketLink: ""
  },
  {
    id: "2026-01-10-secret-rave",
    title: "Secret Rave",
    date: "10.01.2026",
    dateSort: "2026-01-10",
    time: "21:00",
    dj: "DYNAMITE, MALLEGRO, FATHO, MDP",
    tag: "Rave",
    poster: "events/20260110_secret_rave.webp",
    description: "Der erste Secret Rave in Zwettl darfst du nicht verpassen!🪩 Das DJ Line-Up besteht aus DYNAMITE, MALLEGRO, FATHO und MDP.",
    ticketLink: "http://events.tickethead.io/en/tickethead/event/3554"
  },
  {
    id: "2026-01-03-happynewyear-disconight",
    title: "HappyNewYear DiscoNight",
    date: "03.01.2026",
    dateSort: "2026-01-03",
    time: "20:00",
    dj: "DJ CHRIS",
    tag: "New Year",
    poster: "events/20260103_happy_new_year.webp",
    description: "Am 3. Jänner starten wir gleich wieder durch, um gemeinsam das neue Jahr zu feiern! DJ Chris wird für die Stimmung sorgen🪩🎆",
    ticketLink: ""
  },
  {
    id: "2025-12-27-jahresausklang",
    title: "Jahresausklang",
    date: "27.12.2025",
    dateSort: "2025-12-27",
    time: "20:00",
    dj: "DJ NIKVANP.",
    tag: "Jahresausklang",
    poster: "events/20251227_jahresausklang.webp",
    description: "Mit DJ NikVanP lassen wir das Jahr 2025 ausklingen. Schau mit Freunden vorbei und lasst uns gemeinsam den Abend genießen!🪩",
    ticketLink: ""
  },
  {
    id: "2025-12-dance-december",
    title: "Christmas Dance Nights – Dance December",
    date: "Dezember 2025",
    dateSort: "2025-12-06",
    time: "20:00",
    dj: "DJ CHRIS, DJ DUSCHKO, NIKVANP.",
    tag: "Christmas",
    poster: "events/20251206_dance_december.webp",
    description: "Im Dance December hat unser Club jeden Samstag offen für dich! Viel Abwechslung und gute Stimmung!🎶",
    ticketLink: ""
  },
  {
    id: "2025-11-29-oldie-disco-fox-nacht",
    title: "Oldie, Disco- & FOX-Nacht",
    date: "29.11.2025",
    dateSort: "2025-11-29",
    time: "20:00 Uhr",
    dj: "DJ SCHMUCKI",
    tag: "Oldie & FOX",
    poster: "events/20251129_oldie_disco_fox_nacht.webp",
    description: "Bei uns geht es am 29. November wieder rund. Musikalisch begleitet uns DJ SCHMUCKI ab 20 Uhr! Schau vorbei🪩",
    ticketLink: ""
  },
  {
    id: "2025-11-22-dance-night-zeitreise",
    title: "Dance Night Zeitreise",
    date: "22.11.2025",
    dateSort: "2025-11-22",
    time: "20:00 Uhr",
    dj: "DJ DUSCHKO",
    tag: "Zeitreise",
    poster: "events/20251122_dance_night_zeitreise.webp",
    description: "Am 22. November ab 20 Uhr legt bei uns wieder DJ DUSCHKO auf🎶",
    ticketLink: ""
  },
  {
    id: "2025-11-08-austro-pop-night",
    title: "Austro POP NIGHT",
    date: "08.11.2025",
    dateSort: "2025-11-08",
    time: "20:00 Uhr",
    dj: "Mike und Horst",
    tag: "Austro Pop",
    poster: "events/20251108_austro_pop_night.webp",
    description: "Schaut am 8. November zur Abschiedstournee 'für immer jung' vorbei! Um 20:00 geht's los🔥🎉",
    ticketLink: ""
  },
  {
    id: "2025-10-31-halloween-dance-party",
    title: "Halloween Dance Party",
    date: "31.10.2025",
    dateSort: "2025-10-31",
    time: "19:00 Uhr",
    dj: "DJ DUSCHKO",
    tag: "Halloween",
    poster: "events/20251031_halloween.webp",
    description: "Am 31. Oktober ist bei uns im Club Halloween Stimmung mit DJ DUSCHKO! Schaut ab 19 Uhr vorbei🪩🎃",
    ticketLink: ""
  },
  {
    id: "2025-10-11-oldie-disco-fox-nacht",
    title: "Oldie-, Disco- & Fox-Nacht",
    date: "11.10.2025",
    dateSort: "2025-10-11",
    time: "20:00",
    dj: "DJ SCHMUCKI",
    tag: "Oldie & FOX",
    poster: "events/20251011_oldie_disco_fox_nacht.webp",
    description: "Am 11. Oktober legt bei uns wieder DJ SCHMUCKI bei der Oldie-, Disco- & Fox-Nacht auf! Wir freuen uns schon gemeinsam den Abend zu genießen!🎶🪩",
    ticketLink: ""
  },
  {
    id: "2025-09-13-dance-night",
    title: "Dance Night",
    date: "13.09.2025",
    dateSort: "2025-09-13",
    time: "20:00 Uhr",
    dj: "DJ NIKVANP.",
    tag: "Dance Night",
    poster: "events/20250913_dance_night.webp",
    description: "Nach unserer Sommerpause starten wir gleich wieder ins Feiern hinein! Schaut am 13. September bei DJ NikVanP. und uns vorbei, um gemeinsam den Abend zu genießen. Einlass ist ab 20 Uhr.🪩🥂",
    ticketLink: ""
  },
  {
    id: "2025-06-14-dance-clubbing",
    title: "Dance Clubbing",
    date: "14.06.2025",
    dateSort: "2025-06-14",
    time: "21:00 Uhr",
    dj: "DJ NIKVANP.",
    tag: "Dance Clubbing",
    poster: "events/20250614_dance_clubbing.webp",
    description: "Schaut am 14. Juni ab 21:00 Uhr bei uns vorbei! Danach geht's in die Sommerpause bei uns.☀️🪩 Einlass ist bereits ab 20:00 Uhr.",
    ticketLink: ""
  },
  {
    id: "2025-05-03-syrnau",
    title: "Syrnau: Rohrenreith 12",
    date: "03.05.2025",
    dateSort: "2025-05-03",
    time: "20:15 Uhr",
    dj: "Syrnau",
    tag: "Live Musik",
    poster: "events/20250503_syrnau_rohrenreith_12.webp",
    description: "Am 3. Mai 2025 ab 20.15 Uhr spielt bei uns die Syrnau! Tickets gibt es unter www.syrnau.at.🎟️",
    ticketLink: "https://www.syrnau.at"
  },
  {
    id: "2025-04-12-oldie-disco-fox-nacht",
    title: "Oldie-, Disco- & Fox-Nacht",
    date: "12.04.2025",
    dateSort: "2025-04-12",
    time: "20:00 Uhr",
    dj: "DJ SCHMUCKI",
    tag: "Oldie & FOX",
    poster: "events/20250412_oldie_disco_fox_nacht.webp",
    description: "Mit DJ SCHMUCKI werden wir am 12. April ab 20 Uhr eine tolle Nacht haben! Wir freuen uns schon!🪩",
    ticketLink: ""
  },
  {
    id: "2025-03-15-st-patricks-day",
    title: "St. Patrick's Day",
    date: "15.03.2025",
    dateSort: "2025-03-15",
    time: "19:30",
    dj: "PADDY MURPHY",
    tag: "St. Patrick's Day",
    poster: "events/20250315_st_patricks_day.webp",
    description: "PADDY MURPHY – DOPPELKONZERT Lasst uns gemeinsam am Samstag, den 15. März 2025, mit PADDY-MURPHY feiern🪩🥳",
    ticketLink: ""
  },
  {
    id: "2025-03-03-faschingsmontag",
    title: "Faschingsmontag",
    date: "03.03.2025",
    dateSort: "2025-03-03",
    time: "16:00",
    dj: "DJ NIKVANP.",
    tag: "Fasching",
    poster: "events/20250303_faschingsmontag.webp",
    description: "Faschingsparty im Atrium🥳 Wir freuen uns auf viele tolle Kostüme!🪩",
    ticketLink: ""
  },
  {
    id: "2025-03-02-kinderfasching",
    title: "Kinder Fasching",
    date: "02.03.2025",
    dateSort: "2025-03-02",
    time: "16:00 Uhr",
    dj: "",
    tag: "Kinderfasching",
    poster: "events/20250302_kinderfasching.webp",
    description: "Am Sonntag, den 2. März 2025 findet ab 16:00 der Kinder Fasching im Atrium statt.🎶🍬 Schau vorbei und lasst uns den Tag gemeinsam genießen!",
    ticketLink: ""
  },
  {
    id: "2025-02-08-odeon-revival",
    title: "Odeon-Revival",
    date: "08.02.2025",
    dateSort: "2025-02-08",
    time: "20:00 Uhr",
    dj: "DJ SCHMUCKI",
    tag: "Schlager & Oldies",
    poster: "events/20250208_odeon_revival.webp",
    description: "Mit Schlager, Oldies & Goldies! Am 8. Februar legt ab 20.00 Uhr DJ SCHMUCKI bei uns auf! Schau vorbei!🪩",
    ticketLink: ""
  },
  {
    id: "2025-01-11-happy-new-year-dance-night",
    title: "Happy New Year Dance Night",
    date: "11.01.2025",
    dateSort: "2025-01-11",
    time: "20:00 Uhr",
    dj: "DJ NIKVANP.",
    tag: "New Year",
    poster: "events/20250111_new_year_dance_night.webp",
    description: "Lasst uns gemeinsam, am 11. Jänner ab 20.00 Uhr das neue Jahr 2025 feiern!🪩🎆",
    ticketLink: ""
  },
  {
    id: "2024-12-14-xmas-dance-night",
    title: "X-MAS Dance Night",
    date: "14.12.2024",
    dateSort: "2024-12-14",
    time: "20:00",
    dj: "DJ NIKVANP.",
    tag: "Christmas",
    poster: "events/20241214_xmas_dance_night.webp",
    description: "Wir tanzen dem Christkind entgegen🪩🎄",
    ticketLink: ""
  },
  {
    id: "2024-11-16-black-tie-clubbing",
    title: "Black Tie Clubbing",
    date: "16.11.2024",
    dateSort: "2024-11-16",
    time: "20:30",
    dj: "FATHO, MALLEGRO",
    tag: "HTL MATURACLUBBING",
    poster: "events/20241116_black_tie_clubbing.webp",
    description: "Am 16.11. findet unser Maturaclubbing statt, wir freuen uns auf euch!🪩 Dress to impress - stilvoll im Anzug oder Kleid🌹",
    ticketLink: ""
  },
  {
    id: "2024-11-09-austro-pop-night",
    title: "Austro Pop Night",
    date: "09.11.2024",
    dateSort: "2024-11-09",
    time: "20:00",
    dj: "Mike und Horst",
    tag: "Austro Pop",
    poster: "events/20241109_austro_pop_night.webp",
    description: "Schau am 9. November bei uns vorbei und genieße Austro Pop die ganze Nacht!🪩 Wir freuen uns schon!",
    ticketLink: ""
  },
  {
    id: "2024-10-12-ndhc",
    title: "NDHC",
    date: "12.10.2024",
    dateSort: "2024-10-12",
    time: "20:00 Uhr",
    dj: "",
    tag: "Dance Night",
    poster: "events/20241012_ndhc.webp",
    description: "Shake your stress away am 12. Oktober ab 20 Uhr bei uns!🪩 Wir freuen uns auf euch!",
    ticketLink: ""
  },
  {
    id: "2024-09-14-80s-90s",
    title: "80s & 90s",
    date: "14.09.2024",
    dateSort: "2024-09-14",
    time: "21:00",
    dj: "DJ NIKVANP.",
    tag: "80s & 90s",
    poster: "events/20240914_80s_90s.webp",
    description: "Nach einer kurzen Sommerpause sind wir wieder zurück! Wir freuen uns auf euch! DJ NikVanP. wird wieder für Stimmung sorgen!🎶",
    ticketLink: ""
  },
  {
    id: "2024-06-08-dance-clubbing",
    title: "Dance Clubbing",
    date: "08.06.2024",
    dateSort: "2024-06-08",
    time: "21:00",
    dj: "DJ NIKVANP.",
    tag: "Dance Clubbing",
    poster: "events/20240608_dance_clubbing.webp",
    description: "DJ NikVanP. legt am 8. Juni bei uns auf! Seid dabei und verpasst es nicht!🎶",
    ticketLink: ""
  },
  {
    id: "2024-05-11-lets-dance-too",
    title: "Let's Dance Too",
    date: "11.05.2024",
    dateSort: "2024-05-11",
    time: "20:00 Uhr",
    dj: "DEJAY & FIL",
    tag: "Disco",
    poster: "events/20240511_lets_dance_too.webp",
    description: "Am 11. Mai findet bei uns im Club ab 20:00 Uhr 'Let's dance too' statt! Schaut vorbei und lasst es euch bei Disco-Music gut gehen!🎶",
    ticketLink: ""
  },
  {
    id: "2024-04-13-lets-dance",
    title: "Let's Dance",
    date: "13.04.2024",
    dateSort: "2024-04-13",
    time: "20:00 Uhr",
    dj: "DJ & FIL",
    tag: "80er",
    poster: "events/20240413_lets_dance.webp",
    description: "Schaut am 13. April ab 20:00 Uhr bei uns im Club vorbei um den 'Let's dance' Abend nicht zu verpassen. Eine super Stimmung wird es durch DJ & FIL mit Schwerpunkt auf den 80er Jahren geben!🎶",
    ticketLink: ""
  },
  {
    id: "2024-03-16-disc-club-hamerling-revival",
    title: "\"Disc-Club Hamerling\" Revival",
    date: "16.03.2024",
    dateSort: "2024-03-16",
    time: "20:00 Uhr",
    dj: "",
    tag: "Revival",
    poster: "events/20240316_disc_club_hamerling_revival.webp",
    description: "Lasst uns wieder tanzen beim \"Disc-Club Hamerling\" REVIVAL im ATRIUM Club am Samstag, 16. März ab 20:00 Uhr. Die Drinks sind eingekühlt und wir freuen uns auf einen lässigen Abend mit euch!",
    ticketLink: ""
  },
  {
    id: "2024-02-12-cluberoeffnung",
    title: "Cluberöffnung: FASCHING",
    date: "12.02.2024",
    dateSort: "2024-02-12",
    time: "16:00",
    dj: "DJ NIKVANP.",
    tag: "Cluberöffnung",
    poster: "events/20240212_fasching.webp",
    description: "Danke an unsere zahlreichen Gäste am Faschingsmontag in ihren fantasievollen Kostümierungen!",
    ticketLink: ""
  }
];
