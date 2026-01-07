// Backlog for prosjektet
// For å legge til nye items, bare legg til objekter i arrayet
// Status kan være: "ikke-startet", "pågår", "ferdig", "parkert"
// Prioritet kan være: "høy", "middels", "lav"

const backlogItems = [
  {
    id: 1,
    tittel: "Fikse nettsiden",
    beskrivelse: "Endre og legge til innhold i henhold til oppgaven",
    status: "ferdig",
    prioritet: "høy",
    estimertTid: "2 dager",
    ansvarlig: "Alle"
  },
  {
    id: 2,
    tittel: "Prosjektbeskrivelse",
    beskrivelse: "Få en forståelse over prosjektbeskrivelsen",
    status: "ferdig",
    prioritet: "middels",
    estimertTid: "1 dag",
    ansvarlig: "Ikke tildelt"
  },
   {
    id: 3,
    tittel: "Veileder",
    beskrivelse: "Få en veileder",
    status: "pågår",
    prioritet: "middels",
    estimertTid: "1 dag",
    ansvarlig: "Ikke tildelt"
  },
   {
    id: 4,
    tittel: "Kontrakter",
    beskrivelse: "Få signert og sent ut alle kontrakter", 
    status: "ferdig",
    prioritet: "høy",
    estimertTid: "1 dag",
    ansvarlig: "Ikke tildelt"
  },
   {
    id: 5,
    tittel: "Intervjue Saksbehandlere",
    beskrivelse: "Få innsikt i hvordan saksbehandlere jobber i dag og de vanligste feilene",
    status: "ikke-startet",
    prioritet: "middels",
    estimertTid: "2 uke",
    ansvarlig: "Ikke tildelt"
  },
    {
    id: 6,
    tittel: "Grov utkast av prosjeckt plan",
    beskrivelse: "Hva skal vi gjøre, Hvordan skal vi gjøre og milepæler",
    status: "pågår",
    prioritet: "lav",
    estimertTid: "1 uke",
    ansvarlig: "Ikke tildelt"
  },
    {
    id: 7,
    tittel: "Detaljert fremdriftsplan ",
    beskrivelse: "Lag en detaljert fremdriftsplan for prosjektet, med sprinter mål/del mål og mer detaljerte milepæler",
    status: "ikke-startet",
    prioritet: "høy",
    estimertTid: "1 uke",
    ansvarlig: "Ikke tildelt"
  },
];

export default backlogItems;
