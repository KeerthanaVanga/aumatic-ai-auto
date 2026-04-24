# Aumatic.AI — Next.js Clone

A pixel-perfect Next.js replica of the Aumatic.AI website — an AI Automation Agency landing page.

## ✨ Features

- **Dark theme** — deep #050508 background with purple/cyan accent system
- **Framer Motion** — loading screen, scroll-triggered reveals, hover micro-interactions, AnimatePresence transitions
- **Fully responsive** — mobile-first grid layouts
- **Glassmorphism cards** — backdrop-filter blur surfaces with gradient borders
- **Animated background orbs** — soft radial gradient orbs that float continuously
- **Infinite logo ticker** — scrolling tool logos with fade masks
- **Sticky floating navbar** — pill-style with blur-on-scroll
- **Count-up stats** — animated numbers that trigger on scroll
- **Accordion FAQ** — smooth AnimatePresence height transitions
- **Contact form** — with focus states and success state
- **Sticky CTA bar** — appears after scrolling 600px
- **Cursor glow** — subtle purple radial that follows the mouse
- **Noise texture** — CSS SVG noise overlay for depth

## 📁 Project Structure

```
aumatic-nextjs/
├── pages/
│   ├── _app.js          # Global CSS import
│   └── index.js         # Main page (loader + all sections)
├── components/
│   ├── Navbar.js         # Floating navbar with mobile menu
│   ├── Hero.js           # Hero with workflow diagram
│   ├── LogoBar.js        # Infinite scrolling tool logos
│   ├── Services.js       # 6 service cards grid
│   ├── HowItWorks.js     # 4-step process with connecting line
│   ├── Results.js        # Stats + 6 testimonials
│   ├── Pricing.js        # 3-tier pricing cards
│   ├── FAQ.js            # Accordion FAQ
│   ├── Contact.js        # Contact form + perks
│   ├── Footer.js         # Multi-column footer
│   └── StickyCTA.js      # Fixed bottom CTA bar
├── styles/
│   └── globals.css       # Design tokens, utilities, animations
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#050508` |
| Surface | `rgba(255,255,255,0.025)` |
| Purple accent | `#8b5cf6` |
| Cyan accent | `#06b6d4` |
| Green | `#10b981` |
| Amber | `#f59e0b` |
| Text | `#f1f0ff` |
| Muted | `rgba(241,240,255,0.5)` |

## 🔧 Customization

- **Content**: Edit text in each component file
- **Colors**: Change CSS variables in `styles/globals.css`
- **Sections**: Add/remove sections in `pages/index.js`
- **Pricing**: Update the `plans` array in `components/Pricing.js`
- **Services**: Update the `services` array in `components/Services.js`
- **FAQ**: Update the `faqs` array in `components/FAQ.js`

## 📦 Dependencies

- `next` — React framework with SSR/SSG
- `react` + `react-dom` — UI library
- `framer-motion` — Animation library
- `tailwindcss` — Utility CSS classes
- `autoprefixer` + `postcss` — CSS processing
