# Orange Enterprise — Wealth Management Redefined

High-performance institutional wealth management web application for **Orange Enterprise (ARN 83312 • Mumbai)**, engineered with **React 19, Vite, and Tailwind CSS**.

Extracted and implemented from the official Google Stitch project (`projects/17557924396338521739`).

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture

```
Orange Enterprise/
├── index.html                   # HTML entry with Google Fonts & Material Symbols
├── tailwind.config.js           # Exact design tokens, fonts & color palette from Stitch
├── package.json                 # React 19, Vite, Tailwind CSS 3
└── src/
    ├── main.jsx                 # React root entry
    ├── index.css                # Tailwind directives & Material Symbols
    ├── App.jsx                  # Main orchestrator & modal state management
    ├── components/
    │   ├── Header.jsx           # Sticky executive navbar with phone, schedule & get-in-touch
    │   ├── Footer.jsx           # Regulatory disclosure, SEBI/AMFI notice, desk hours
    │   ├── ScheduleModal.jsx    # Interactive appointment booking dialog
    │   ├── IntakeModal.jsx      # Client preliminary diagnostic questionnaire
    │   ├── LegalModal.jsx       # Privacy Policy, Terms & Cookie governance modals
    │   └── CookieBanner.jsx     # Institutional cookie consent banner with policy links
    └── pages/
        ├── HomePage.jsx         # Screen 1: Hero, Telemetry strip, About snippet, 3 Services, Salon form
        ├── AboutPage.jsx        # Screen 2: Boardroom skyline, Creed, 3 Pillars, Leadership, Timings
        ├── ServicesPage.jsx     # Screen 3: Wealth (SVG chart), Insurance (Gauges), Finance, Lifecycle
        └── ContactPage.jsx      # Screen 4: Direct channels, Timings matrix, Validated executive form
```

---

## 🎨 Design System Specifications

- **Primary Accent:** Royal Orange (`#F47732`)
- **Institutional Navy:** Deep Midnight Navy (`#101D32`)
- **Canvas Base:** Warm Ivory (`#F9F9FF`)
- **Typography:**
  - Headlines & Labels: `Hanken Grotesk`
  - Body Copy: `Source Sans 3`
- **Fiduciary Credentials:** AMFI Registered ARN 83312 • Mumbai Desk
