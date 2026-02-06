# Prosjektplan - Gruppe 7 Portefolio

## 1. Prosjektinformasjon

### 1.1 Prosjektbeskrivelse
**Hva skal utvikles:**
- [ ] Porteføljenettside for Gruppe 7
- [ ] React-basert single page application
- [ ] Presentasjon av team, prosjekter og bacheloroppgave

**Målgruppe:**
- Potensielle arbeidsgivere
- Samarbeidspartnere
- Andre studenter

**Leveranse:**
- Publisert nettside (URL: _______________)
- Kildekode på GitHub
- Dokumentasjon

### 1.2 Team
| Navn | Rolle | Ansvar |
|------|-------|--------|
| _______ | Frontend utvikler | _________ |
| _______ | Designer | _________ |
| _______ | Prosjektleder | _________ |
| _______ | Utvikler | _________ |

### 1.3 Tidsramme
- **Startdato:** _____________
- **Sluttdato:** _____________
- **Antall sprinter:** _____________
- **Sprint lengde:** _______ uker

---

## 2. Kvalitetsaspekter

### 2.1 Definerte kvalitetskrav

| Kvalitetsaspekt | Beskrivelse | Hvorfor viktig | Mål | Hvordan måle |
|-----------------|-------------|----------------|-----|--------------|
| **Brukervennlighet** | Intuitiv navigasjon og design | Representerer oss profesjonelt | SUS score > 75 | Brukertest med 5 personer |
| **Ytelse** | Rask innlasting | Første inntrykk teller | Lighthouse score > 90 | Chrome DevTools Lighthouse |
| **Kodemessig kvalitet** | Ren, vedlikeholdbar kode | Teamsamarbeid og fremtidig vedlikehold | 0 ESLint errors | `npm run lint` |
| **Responsivitet** | Fungerer på alle enheter | Besøkende bruker ulike enheter | 100% funksjonalitet mobil/desktop | Manuell testing |
| **Tilgjengelighet** | WCAG 2.1 AA | Inkluderende design | Lighthouse accessibility > 90 | Lighthouse + manual testing |
| **Visuell konsistens** | Enhetlig design | Profesjonelt uttrykk | Design review godkjent | Team review |

### 2.2 Definition of Done (DoD)
En oppgave er ferdig når:
- [ ] Koden er skrevet og fungerer som forventet
- [ ] ESLint viser 0 errors
- [ ] Testet på Chrome, Firefox og Safari
- [ ] Testet på mobil og desktop
- [ ] Code review gjennomført av minst 1 teammedlem
- [ ] Dokumentasjon oppdatert (hvis relevant)
- [ ] Merget til main branch
- [ ] Visuelt godkjent av designer

---

## 3. Backlog og Planlegging

### 3.1 MoSCoW Prioritering

#### MUST HAVE (Må ha for MVP)
| ID | Feature | User Story | Estimat (timer) | Ansvarlig | Status |
|----|---------|-----------|-----------------|-----------|--------|
| M1 | Navigasjon | Som besøkende vil jeg enkelt navigere mellom sider | 5t | _____ | ⬜ Not started |
| M2 | Hero-seksjon | Som besøkende vil jeg umiddelbart se teamets identitet | 4t | _____ | ⬜ Not started |
| M3 | Om oss-side | Som besøkende vil jeg lære om teamet | 6t | _____ | ⬜ Not started |
| M4 | Prosjektoversikt | Som besøkende vil jeg se tidligere og pågående prosjekter | 8t | _____ | ⬜ Not started |
| M5 | Kontaktskjema | Som besøkende vil jeg kunne ta kontakt | 5t | _____ | ⬜ Not started |
| M6 | Responsivt design | Som mobilbruker vil jeg ha god opplevelse | 8t | _____ | ⬜ Not started |
| M7 | Bachelorside | Som besøkende vil jeg se bachelorprosjektet | 6t | _____ | ⬜ Not started |

#### SHOULD HAVE (Bør ha)
| ID | Feature | User Story | Estimat (timer) | Ansvarlig | Status |
|----|---------|-----------|-----------------|-----------|--------|
| S1 | Video-seksjon | Som besøkende vil jeg se team-video | 3t | _____ | ⬜ Not started |
| S2 | Bildegalleri | Som besøkende vil jeg se bilder fra prosjekter | 4t | _____ | ⬜ Not started |
| S3 | Smooth scrolling | Som bruker vil jeg ha jevne overganger | 2t | _____ | ⬜ Not started |
| S4 | SEO optimalisering | For å bli funnet i søkemotorer | 3t | _____ | ⬜ Not started |

#### COULD HAVE (Kan ha)
| ID | Feature | User Story | Estimat (timer) | Ansvarlig | Status |
|----|---------|-----------|-----------------|-----------|--------|
| C1 | Animasjoner | Som besøkende vil jeg ha engasjerende opplevelse | 4t | _____ | ⬜ Not started |
| C2 | Dark mode | Som bruker vil jeg velge mørk modus | 3t | _____ | ⬜ Not started |
| C3 | Blogg-seksjon | Som besøkende vil jeg lese oppdateringer | 8t | _____ | ⬜ Not started |

#### WON'T HAVE (Utenfor scope denne gang)
- Brukerinnlogging
- CMS integrasjon
- Flerspråklig støtte

### 3.2 Sprint Planning

#### Sprint 1: ________ til ________
**Mål:** Grunnleggende struktur og navigasjon

| Task ID | Beskrivelse | Estimat | Faktisk tid | Avvik | Status |
|---------|-------------|---------|-------------|-------|--------|
| M1 | Implementer Header-komponent | 3t | ___t | ___% | ⬜ |
| M1 | Implementer routing | 2t | ___t | ___% | ⬜ |
| M2 | Implementer Hero-komponent | 4t | ___t | ___% | ⬜ |

**Total planlagt:** _____ timer  
**Total faktisk:** _____ timer  
**Velocity:** _____ story points

#### Sprint 2: ________ til ________
**Mål:** Hovedsider og innhold

| Task ID | Beskrivelse | Estimat | Faktisk tid | Avvik | Status |
|---------|-------------|---------|-------------|-------|--------|
| M3 | Om oss-side | 6t | ___t | ___% | ⬜ |
| M4 | Prosjektoversikt | 8t | ___t | ___% | ⬜ |
| M7 | Bachelorside | 6t | ___t | ___% | ⬜ |

**Total planlagt:** _____ timer  
**Total faktisk:** _____ timer  
**Velocity:** _____ story points

#### Sprint 3: ________ til ________
**Mål:** Ferdigstilling og polering

| Task ID | Beskrivelse | Estimat | Faktisk tid | Avvik | Status |
|---------|-------------|---------|-------------|-------|--------|
| M5 | Kontaktskjema | 5t | ___t | ___% | ⬜ |
| M6 | Responsivitet | 8t | ___t | ___% | ⬜ |
| S1-S4 | Should have features | 12t | ___t | ___% | ⬜ |

**Total planlagt:** _____ timer  
**Total faktisk:** _____ timer  
**Velocity:** _____ story points

---

## 4. Ressursplan

### 4.1 Tilgjengelige ressurser
| Ressurs | Timer/uke | Totalt timer | Periode |
|---------|-----------|--------------|---------|
| Utvikler 1 | ___t | ___t | ________ |
| Utvikler 2 | ___t | ___t | ________ |
| Utvikler 3 | ___t | ___t | ________ |
| Designer | ___t | ___t | ________ |
| **Total** | **___t** | **___t** | |

### 4.2 Ressursfordeling
| Sprint | Planlagt arbeid (t) | Tilgjengelige ressurser (t) | Buffer | Utnyttelse |
|--------|---------------------|---------------------------|--------|------------|
| Sprint 1 | ___t | ___t | ___% | ___% |
| Sprint 2 | ___t | ___t | ___% | ___% |
| Sprint 3 | ___t | ___t | ___% | ___% |

**Buffer-policy:** Hold 20% buffer for uforutsette problemer

### 4.3 Ressursutnyttelse - KPIer

| Indikator | Mål | Hvordan måle | Frekvens |
|-----------|-----|--------------|----------|
| **Velocity stabilitet** | ±15% variasjon | Sammenlign completed story points per sprint | Etter hver sprint |
| **Estimat-nøyaktighet** | <25% avvik | (Faktisk - Estimat) / Estimat × 100 | Ukentlig |
| **Rework rate** | <20% | Timer på bugfix / Total utvikling | Ukentlig |
| **Code review efficiency** | <2 dager | Tid fra PR til merge | Daglig |
| **Blocker-tid** | <10% | Timer blocked / Total timer | Ukentlig |
| **Deployment frequency** | Min. 2x/uke | Git log | Ukentlig |

---

## 5. Kvalitetssikring

### 5.1 Kvalitetssikring av Plan
**Prosess:**
- [ ] Sprint planning meeting hver _______ uke
- [ ] Review av forrige sprint
- [ ] Reprioritering av backlog basert på learnings
- [ ] Alle teammedlemmer må godkjenne sprint-mål
- [ ] Risk assessment: Hva kan gå galt?

**Sjekkliste før sprint:**
- [ ] Er alle tasks klart definert med akseptansekriterier?
- [ ] Er estimatene gjort av de som skal utføre arbeidet?
- [ ] Er avhengigheter mellom tasks identifisert?
- [ ] Har vi kapasitet til å fullføre planlagt arbeid?
- [ ] Er Definition of Done tydelig for alle?

### 5.2 Kvalitetssikring av Backlog
**Backlog refinement hver _______ dag:**
- [ ] Review av user stories
- [ ] Splitte for store tasks (>8 timer)
- [ ] Legge til akseptansekriterier
- [ ] Estimering med Planning Poker
- [ ] Prioritering med MoSCoW

**User Story Format:**
```
Som [type bruker]
Ønsker jeg [funksjon]
Slik at [verdi/grunn]

Akseptansekriterier:
- Gitt [context]
- Når [handling]
- Så [forventet resultat]
```

**Eksempel:**
```
Som besøkende på nettsiden
Ønsker jeg å se en oversikt over pågående prosjekter
Slik at jeg kan vurdere teamets kompetanse

Akseptansekriterier:
- Gitt at jeg er på "Prosjekter"-siden
- Når siden lastes
- Så skal jeg se minimum 3 prosjektkort
- Og hvert kort skal ha tittel, beskrivelse og bilde
- Og jeg skal kunne filtrere på "Pågående" og "Fullførte"
```

### 5.3 Bruk av Estimater og Timerapportering

#### Estimeringsteknikk: Planning Poker
1. Alle teammedlemmer får kort (1, 2, 3, 5, 8, 13, 21 timer)
2. Task presenteres
3. Alle velger et kort simultant
4. Ved uenighet: Diskuter, stem på nytt
5. Enighet: Bruk estimatet

#### Timerapportering (daglig)
| Dato | Task | Estimat | Timer brukt | Gjenstående | Notater |
|------|------|---------|-------------|-------------|---------|
| _____ | _____ | ___t | ___t | ___t | _____________ |

#### Ukentlig Velocity Review
```
Sprint X Review:
- Planlagt story points: _____
- Fullført story points: _____
- Velocity: _____
- Velocity forrige sprint: _____
- Trend: ↗ ↘ →
- Læring: _____________________
```

### 5.4 Kontrollmekanismer

#### Daily Standup (maks 15 min)
**Tid:** _______ kl _______  
**Alle svarer på:**
1. Hva gjorde jeg siden sist?
2. Hva skal jeg gjøre i dag?
3. Er det noe som blokkerer meg?

#### Sprint Review (slutten av sprint)
- [ ] Demo av ferdigstilt arbeid
- [ ] Hva gikk bra?
- [ ] Hva gikk dårlig?
- [ ] Hva skal vi forbedre?
- [ ] Oppdatere velocity metrics

#### Code Quality Gates
**Før merge til main:**
- [ ] ESLint: 0 errors
- [ ] Build: Success
- [ ] Manual testing: Pass
- [ ] Code review: Approved
- [ ] Lighthouse score: >85

---

## 6. Testing og Kvalitetskontroll

### 6.1 Testing Checklist

#### Funksjonell testing
| Feature | Test case | Forventet resultat | Status | Tester | Dato |
|---------|-----------|-------------------|--------|--------|------|
| Navigasjon | Klikk på alle menyvalg | Riktig side åpnes | ⬜ | _____ | _____ |
| Kontaktskjema | Send med gyldige data | Vellykket sending | ⬜ | _____ | _____ |
| Responsivitet | Test på mobil | Layout tilpasses | ⬜ | _____ | _____ |

#### Performance testing
- [ ] Lighthouse Performance score > 90
- [ ] Bundle size < 500kb
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s

#### Cross-browser testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 6.2 Kvalitetsmetrikker - Ukentlig tracking

| Uke | Velocity | Bugs opprettet | Bugs fikset | ESLint errors | Lighthouse score | Code review avg tid |
|-----|----------|----------------|-------------|---------------|------------------|---------------------|
| 1 | _____ | _____ | _____ | _____ | _____ | _____ |
| 2 | _____ | _____ | _____ | _____ | _____ | _____ |
| 3 | _____ | _____ | _____ | _____ | _____ | _____ |

---

## 7. Risikostyring

| Risiko | Sannsynlighet | Konsekvens | Mitigering | Ansvarlig |
|--------|---------------|------------|------------|-----------|
| Teammedlem blir syk | Middels | Høy | Cross-training, dokumentasjon | _____ |
| Tekniske problemer | Middels | Middels | Buffer i estimater, daily backups | _____ |
| Scope creep | Høy | Høy | Streng prioritering, MoSCoW | _____ |
| Merge conflicts | Høy | Lav | Hyppige commits, kommunikasjon | _____ |

---

## 8. Kommunikasjon

### 8.1 Møteplan
| Møte | Frekvens | Dag/Tid | Varighet | Deltakere | Formål |
|------|----------|---------|----------|-----------|--------|
| Daily standup | Daglig | _____ | 15 min | Alle | Status og blockers |
| Sprint planning | Hver __ uke | _____ | 2 timer | Alle | Planlegge sprint |
| Sprint review | Slutt av sprint | _____ | 1 time | Alle | Demo og retrospektiv |
| Backlog refinement | Ukentlig | _____ | 1 time | Alle | Prioritere backlog |

### 8.2 Kommunikasjonskanaler
- **Daglig kommunikasjon:** ___________ (Slack/Discord/Teams)
- **Kode:** GitHub
- **Dokumentasjon:** ___________
- **Møter:** ___________

---

## 9. Verktøy og Prosesser

### 9.1 Utviklingsverktøy
- **IDE:** VS Code
- **Versjonskontroll:** Git + GitHub
- **Package manager:** npm
- **Linting:** ESLint
- **Framework:** React + Vite
- **Testing:** ___________ (jest/vitest/testing-library)

### 9.2 Git Workflow
```
main (production)
  ↑
develop (staging)
  ↑
feature/feature-name (feature branches)
```

**Branch naming:**
- `feature/header-component`
- `bugfix/navigation-mobile`
- `hotfix/critical-bug`

**Commit message format:**
```
[TYPE] Kort beskrivelse

Lengre beskrivelse hvis nødvendig

TYPE: feat, fix, docs, style, refactor, test, chore
```

### 9.3 Code Review Process
1. Developer opretter PR med beskrivelse
2. Minst 1 teammedlem reviewer
3. Reviewer sjekker:
   - Koden følger DoD
   - Ingen åpenbare bugs
   - Koden er lesbar og vedlikeholdbar
   - Tests (hvis relevant)
4. Feedback gis som kommentarer
5. Developer fikser feedback
6. Approve og merge

---

## 10. Vedlegg

### 10.1 Nyttige kommandoer
```bash
# Development
npm run dev

# Linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview

# Check bundle size
npm run build -- --mode production --analyze
```

### 10.2 Definisjoner
- **Story Point:** Relativ størrelse på en oppgave (1-21 timer)
- **Velocity:** Antall story points fullført per sprint
- **Sprint:** Tidsperiode for utvikling (typisk 1-2 uker)
- **MVP:** Minimum Viable Product - minste funksjonelle versjon
- **DoD:** Definition of Done - kriterier for ferdig oppgave

---

## 11. Sign-off

### Prosjektplan godkjent av:

| Navn | Rolle | Signatur | Dato |
|------|-------|----------|------|
| _______ | _______ | _______ | _______ |
| _______ | _______ | _______ | _______ |
| _______ | _______ | _______ | _______ |

---

**Sist oppdatert:** _____________  
**Versjon:** 1.0  
**Neste review:** _____________
