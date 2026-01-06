// Backlog for prosjektet
// For å legge til nye items, bare legg til objekter i arrayet
// Status kan være: "ikke-startet", "pågår", "ferdig", "parkert"
// Prioritet kan være: "høy", "middels", "lav"

const backlogItems = [
  {
    id: 1,
    tittel: "Fikse nettsiden",
    beskrivelse: "Endre og legge til innhold i henhold til oppgaven",
    status: "pågår",
    prioritet: "høy",
    estimertTid: "2 dager",
    ansvarlig: "Alle"
  },
  {
    id: 2,
    tittel: "Prosjektbeskrivelse",
    beskrivelse: "Få en forståelse over prosjektbeskrivelsen",
    status: "pågår",
    prioritet: "middels",
    estimertTid: "1 uke",
    ansvarlig: "Ikke tildelt"
  },
];

export default backlogItems;
