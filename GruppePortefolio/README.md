# GruppePortefolio - React Application

Dette er hovedapplikasjonen for Gruppe 7 Portefølje. En React single-page application bygget med Vite.

## 🏃 Quick Start

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev

# Åpne http://localhost:5173 i nettleseren
```

## 📜 Tilgjengelige Scripts

### `npm run dev`
Starter utviklingsserveren med hot module replacement (HMR).
- Applikasjonen kjører på `http://localhost:5173`
- Automatisk refresh ved kodeendringer

### `npm run build`
Bygger applikasjonen for produksjon i `dist/` mappen.
- Optimalisert for beste ytelse
- Minifisert og bundlet kode
- Klar for deployment

### `npm run preview`
Forhåndsviser produksjonsbygget lokalt.
- Kjør `npm run build` først
- Nyttig for å teste produksjonsversjonen før deployment

### `npm run lint`
Kjører ESLint for å sjekke kodekvalitet.
- Sjekker alle `.js` og `.jsx` filer
- Håndhever kodestandarder
- Må vise 0 errors før merge til main

## 🎨 Komponenter

Applikasjonen består av følgende hovedkomponenter:

### Navigasjon
- **Header** - Navigasjonsmeny
- **Footer** - Bunntekst med lenker
- **ScrollToTop** - Scrolling til toppen ved sidenavigasjon

### Sider og Seksjoner
- **Hero** - Landingseksjon på forsiden
- **About** - Kort om-seksjon
- **Video** - Video-presentasjon av teamet
- **Members** - Teammedlemmer med kort
- **Goals** - Mål og visjoner
- **OmOss** - Detaljert Om Oss-side med galleri
- **Projects** - Prosjektoversikt (pågående og tidligere)
- **Contact** - Kontaktskjema
- **Bachelor** - Bachelorprosjekt med kvalitet og backlog

## 🗺️ Routing

Applikasjonen bruker React Router med følgende ruter:

- `/` - Forside (Hero, About, Video, Members, Goals, Contact)
- `/OmOss` - Om Oss side
- `/projects` - Prosjekter side
- `/contact` - Kontakt side
- `/bachelor` - Bachelor side

## 🎯 Teknologi

- **React 19.1.1** - UI bibliotek
- **React Router DOM 7.8.2** - Routing
- **Vite 7.1.8** - Build tool og dev server
- **React Icons 5.5.0** - Ikoner
- **ESLint** - Linting

## 📝 Kodestandarder

### ESLint Konfigurasjon
Prosjektet bruker ESLint med:
- React hooks regler
- React refresh regler
- ES6+ standarder

### Commit Message Format
```
[TYPE] Kort beskrivelse

TYPE: feat, fix, docs, style, refactor, test, chore
```

### Branch Naming
- `feature/feature-name` - Ny funksjonalitet
- `bugfix/bug-description` - Feilrettinger
- `hotfix/critical-bug` - Kritiske feilrettinger

## 🏗️ Build Konfigurasjon

Prosjektet bruker Vite som build tool:
- **Hot Module Replacement (HMR)** - Rask utvikling
- **Fast Refresh** - React-komponenter oppdateres uten å miste state
- **Optimalisert bundling** - Automatisk code splitting og tree shaking

## 📁 Katalogstruktur

```
src/
├── components/
│   ├── about/          # Om-seksjon komponenter
│   ├── bachelor/       # Bachelor-relaterte komponenter
│   ├── contact/        # Kontakt komponenter
│   ├── footer/         # Footer
│   ├── goals/          # Mål-seksjon
│   ├── header/         # Navigasjon header
│   ├── Hero/           # Hero/landing seksjon
│   ├── OmOss/          # Om Oss side komponenter
│   ├── prosjekt/       # Prosjekt-komponenter
│   ├── ScrollToTop/    # Scroll utility
│   ├── team/           # Team medlemmer
│   └── video/          # Video-seksjon
├── App.jsx             # Hoved App med routing
└── main.jsx            # Entry point

public/
├── cv/                 # CV-filer
├── demos/              # Demo-filer
├── images/             # Bilder
└── logo/               # Logo-filer
```

## 🔧 Feilsøking

### Port allerede i bruk
Hvis port 5173 er opptatt:
```bash
# Stopp prosessen som bruker porten, eller
# Vite vil automatisk bruke neste ledige port
```

### ESLint errors
```bash
# Kjør linting
npm run lint

# Automatisk fix (der mulig)
npm run lint -- --fix
```

### Build feil
```bash
# Slett node_modules og reinstaller
rm -rf node_modules package-lock.json
npm install
```

## 📚 Mer Informasjon

Se [hovedprosjektets README](../README.md) for:
- Komplett prosjektdokumentasjon
- Team informasjon
- Utviklingsworkflow
- Lenke til detaljert prosjektplan

---

For spørsmål eller problemer, opprett et issue på GitHub eller kontakt teamet.
