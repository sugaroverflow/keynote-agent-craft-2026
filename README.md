# Agent Craft 2026 Slidev Deck

This repo uses Slidev as the source of truth for the keynote.

## Active Source

- `slides.md`: the Slidev talk structure, visual slides, and presenter notes.
- `script.md`: the reference script used to keep presenter notes aligned.
- `layouts/default.vue`: persistent Sparkle Bureaucracy shell.
- `components/`: reusable windows, stamps, nodes, placeholders, and comparison views.
- `styles/`: design tokens, typography, shell, diagrams, and slide primitives.
- `public/assets/`: served event and logo assets.
- `public/placeholders/`: local PNG placeholders for screenshot/evidence slots.
- `assets/`: original screenshot/photo source files before browser-safe copies are placed in `public/assets/screenshots/`.

## Commands

```bash
npm run dev
npm run build
npm run build:pages
npm run export:png
npm run export:pdf
```

## Review Artifacts

- Static build: `dist/`
- Per-slide PNGs: `dist/png/`
- Optional Slidev PDF export: `dist/agent-craft-keynote.pdf`

## Placeholder Strategy

Every screenshot/evidence slot is represented as an `SBPlaceholder` with a label, optional replacement note, aspect ratio, and local image backing. Place real browser-safe assets under `public/assets/screenshots/`, keep original capture files under `assets/`, and update the `src` prop in `slides.md`.
