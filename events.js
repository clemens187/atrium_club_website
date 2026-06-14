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
    id: "2026-06-13-summer-dance-night",
    title: "Summer Dance Night",
    date: "13.06.2026",
    dateSort: "2026-06-13",
    time: "21:00 Uhr",
    dj: "DJ Duschko",
    tag: "Summer Party",
    poster: "images/poster-placeholder-1.svg",
    description: "Die Summer Dance Night eröffnet die warme Jahreszeit im ATRIUM. DJ Duschko sorgt ab 21:00 Uhr für sommerliche Party-Stimmung — von Charts über House bis zu den Sommerhits der letzten Jahre. Türen öffnen, Bass läuft, die Nacht ist lang. Schau unbedingt vorbei!",
    ticketLink: ""
  },
  {
    id: "2026-07-04-friday-flashback",
    title: "Friday Flashback",
    date: "04.07.2026",
    dateSort: "2026-07-04",
    time: "22:00 Uhr",
    dj: "DJ Resident",
    tag: "90s / 00s",
    poster: "images/poster-placeholder-2.svg",
    description: "Zurück in die Zukunft: Friday Flashback bringt die größten Hits der 90er und 2000er zurück auf die Tanzfläche. Ein Abend für alle, die wissen wollen, wie sich Nostalgie und Nebelmaschine kombinieren lassen.",
    ticketLink: ""
  }
];

const PAST_EVENTS = [
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  {
    id: "2026-05-30-kult-dance-night",
    title: "Kult Dance Night",
    date: "30.05.2026",
    dateSort: "2026-05-30",
    time: "21:00 Uhr",
    dj: "DJ Chris",
    tag: "Kult Edition",
    poster: "images/poster-placeholder-3.svg",
    description: "Die Kult Dance Night mit DJ Chris war ein voller Erfolg — die Tanzfläche war bis zum letzten Song voll. Danke an alle, die dabei waren!",
    ticketLink: ""
  },
  
  {
    id: "2026-04-18-spring-rave",
    title: "Spring Rave",
    date: "18.04.2026",
    dateSort: "2026-04-18",
    time: "21:30 Uhr",
    dj: "DJ Nox",
    tag: "Electro",
    poster: "images/poster-placeholder-4.svg",
    description: "Mit dem Spring Rave hat das ATRIUM den Frühling eingeläutet. Electro-Sounds, Stroboskoplicht und eine Crowd, die bis zum Schluss durchgehalten hat.",
    ticketLink: ""
  }
];
