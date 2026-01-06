// Backlog for prosjektet
// For å legge til nye items, bare legg til objekter i arrayet
// Status kan være: "ikke-startet", "pågår", "ferdig", "parkert"
// Prioritet kan være: "høy", "middels", "lav"

const backlogItems = [
  {
    id: 1,
    tittel: "Fikkse netsiden",
    beskrivelse: "Endre og legge til innhold i henhold til oppgavemn",
    status: "pågår",
    prioritet: "høy",
    estimertTid: "2 dager",
    ansvarlig: "Alle"
  },
  {
    id: 2,
    tittel: "Prosjekt beskrivelse",
    beskrivelse: "Få en forståelse over prosjektbeskrivelsen",
    status: "pågår",
    prioritet: "middels",
    estimertTid: "1 uke",
    ansvarlig: "Ikke tildelt"
  },
  {
    id: 3,
    tittel: "SEO optimalisering",
    beskrivelse: "Forbedre meta tags og laste inn tid",
    status: "ikke-startet",
    prioritet: "middels",
    estimertTid: "3 dager",
    ansvarlig: "Ikke tildelt"
  },
  {
    id: 4,
    tittel: "Testing",
    beskrivelse: "Sette opp automatiserte tester med Vitest",
    status: "ikke-startet",
    prioritet: "lav",
    estimertTid: "1 uke",
    ansvarlig: "Ikke tildelt"
  }
];

export default backlogItems;
