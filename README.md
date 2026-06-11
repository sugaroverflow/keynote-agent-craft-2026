# Agent Craft 2026 Slidev Deck

This repo now uses Slidev as the active source of truth for the keynote.

## Active Source

- `slides.md`: the 22-slide talk structure, driven by `script.md`.
- `layouts/default.vue`: persistent Sparkle Bureaucracy shell.
- `components/`: reusable windows, stamps, nodes, placeholders, and comparison views.
- `styles/`: design tokens, typography, shell, diagrams, and slide primitives.
- `public/assets/`: served event and logo assets.
- `public/placeholders/`: local PNG placeholders for screenshot/evidence slots.

The previous PptxGenJS deck remains in `deck/` as reference only.

## Commands

```bash
npm run dev
npm run build
npm run export:png
npm run export:pdf
```

`npm run build:legacy-pptx` regenerates the old PPTX reference if needed, but it is not the active workflow.

## Review Artifacts

- Static build: `dist/`
- Per-slide PNGs: `dist/png/`
- Final PDF: `dist/agent-craft-keynote.pdf`
- Contact sheet: `public/review/slidev-contact-sheet.png`

## Placeholder Strategy

Every screenshot/evidence slot is represented as an `SBPlaceholder` with a label, replacement note, aspect ratio, and local PNG backing. Replace the files under `public/placeholders/` or update the `src` prop in `slides.md` when real screenshots are available.
