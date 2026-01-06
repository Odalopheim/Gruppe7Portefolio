# Gruppe 7 Portefølje

En moderne porteføljenettside for Gruppe 7, bygget med React og Vite. Dette prosjektet presenterer vårt team, våre prosjekter, og vår bacheloroppgave på en profesjonell og engasjerende måte.

## 📋 Innholdsfortegnelse

- [Om Prosjektet](#om-prosjektet)
- [Funksjoner](#funksjoner)
- [Teknologi Stack](#teknologi-stack)
- [Komme i gang](#komme-i-gang)
- [Utvikling](#utvikling)
- [Prosjektstruktur](#prosjektstruktur)
- [Dokumentasjon](#dokumentasjon)
- [Team](#team)

## 🎯 Om Prosjektet

Denne nettsiden er utviklet som en portefølje for Gruppe 7. Nettsiden presenterer:
- Vårt team og våre medlemmer
- Pågående og fullførte prosjekter
- Vår bacheloroppgave og tilhørende dokumentasjon
- Kontaktinformasjon og kontaktskjema

Målgruppen for nettsiden er potensielle arbeidsgivere, samarbeidspartnere, og andre studenter.

## ✨ Funksjoner

- **Responsivt Design**: Optimalisert for desktop, tablet og mobil
- **Single Page Application**: Rask navigasjon uten sideoppdateringer
- **Prosjektoversikt**: Presentasjon av tidligere og pågående prosjekter
- **Om Oss**: Detaljert informasjon om teamet
- **Bachelorside**: Dokumentasjon av bachelorprosjektet
- **Kontaktskjema**: Enkel kontaktmulighet for besøkende
- **Video-seksjon**: Visuell presentasjon av teamet
- **Mål og visjoner**: Presentasjon av teamets mål

## 🛠 Teknologi Stack

### Frontend
- **React** (v19.1.1) - JavaScript bibliotek for brukergrensesnitt
- **React Router DOM** (v7.8.2) - Routing for single page application
- **Vite** (v7.1.8) - Rask build tool og development server
- **React Icons** (v5.5.0) - Ikonbibliotek

### Verktøy
- **ESLint** - Linting og kodekvalitet
- **npm** - Pakkehåndtering

## 🚀 Komme i gang

### Forutsetninger

Sørg for at du har følgende installert:
- **Node.js** (versjon 16 eller høyere)
- **npm** (kommer med Node.js)

### Installasjon

1. **Klon repositoryet:**
   ```bash
   git clone https://github.com/Odalopheim/Gruppe7Portefolio.git
   cd Gruppe7Portefolio
   ```

2. **Installer avhengigheter i rot-mappen:**
   ```bash
   npm install
   ```

3. **Installer avhengigheter i GruppePortefolio-mappen:**
   ```bash
   cd GruppePortefolio
   npm install
   ```

4. **Start utviklingsserveren:**
   ```bash
   npm run dev
   ```

   Nettsiden vil nå være tilgjengelig på `http://localhost:5173`

## 💻 Utvikling

### Tilgjengelige Scripts

I `GruppePortefolio`-mappen kan du kjøre:

- **`npm run dev`** - Starter utviklingsserveren
- **`npm run build`** - Bygger prosjektet for produksjon
- **`npm run preview`** - Forhåndsviser produksjonsbygg lokalt
- **`npm run lint`** - Kjører ESLint for å sjekke kodekvalitet

### Utviklingsworkflow

1. Opprett en ny branch fra `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Gjør dine endringer og test lokalt

3. Kjør linting før commit:
   ```bash
   npm run lint
   ```

4. Commit og push dine endringer:
   ```bash
   git add .
   git commit -m "[feat] Beskrivelse av endring"
   git push origin feature/your-feature-name
   ```

5. Opprett en Pull Request på GitHub

### Code Review Prosess

- Minst 1 teammedlem må reviewe PR
- ESLint må vise 0 errors
- Koden må testes på Chrome, Firefox og Safari
- Koden må testes på både mobil og desktop

## 📁 Prosjektstruktur

```
Gruppe7Portefolio/
├── GruppePortefolio/          # Hoved React-applikasjon
│   ├── public/                # Statiske filer (bilder, logo, etc.)
│   │   ├── cv/
│   │   ├── demos/
│   │   ├── images/
│   │   └── logo/
│   ├── src/                   # Kildekode
│   │   ├── components/        # React komponenter
│   │   │   ├── about/
│   │   │   ├── bachelor/      # Bachelorside komponenter
│   │   │   ├── contact/
│   │   │   ├── footer/
│   │   │   ├── goals/
│   │   │   ├── header/
│   │   │   ├── Hero/
│   │   │   ├── OmOss/         # Om Oss side
│   │   │   ├── prosjekt/      # Prosjektoversikt
│   │   │   ├── ScrollToTop/
│   │   │   ├── team/          # Teammedlemmer
│   │   │   └── video/
│   │   ├── App.jsx            # Hoved App-komponent med routing
│   │   └── main.jsx           # Entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── PROSJEKTPLAN.md            # Detaljert prosjektplan
├── README.md                  # Denne filen
└── package.json
```

## 📚 Dokumentasjon

- **[PROSJEKTPLAN.md](./PROSJEKTPLAN.md)** - Detaljert prosjektplan med:
  - MoSCoW-prioritering av features
  - Sprint-planlegging
  - Kvalitetskrav og testing
  - Ressursplan og tidsramme
  - Risikostyring
  - Definition of Done (DoD)

## 👥 Team

Dette prosjektet er utviklet av Gruppe 7. For mer informasjon om teamet, besøk nettsiden eller se [Om Oss](./GruppePortefolio/src/components/OmOss) seksjonen.

## 📝 Lisens

Dette prosjektet er privat og ment for porteføljebruk.

## 🔗 Lenker

- **Repository**: [GitHub - Gruppe7Portefolio](https://github.com/Odalopheim/Gruppe7Portefolio)
- **Issues**: [GitHub Issues](https://github.com/Odalopheim/Gruppe7Portefolio/issues)

---

**Sist oppdatert**: Januar 2026

 