# The Agent Hype Is Real. So Is the Mess.

Keynote for [Agent Craft 2026](https://aifortherestofus.live/london-2026/agenda) — a field report on building with AI agents.

- The shift from prompting to systems thinking
- Three field stops: prompt systems, workflows, and factories/fleets
- Real examples: a window-washing intake agent, a chief-of-staff agent, and Project Mirror (18 agents building digital twins for a political awards process)
- The tension between autonomy and delegation, and what it means to build systems worth trusting

Built with [Slidev](https://sli.dev).

## Source

- `slides.md`: talk structure, slides, and presenter notes
- `script.md`: reference script
- `components/`: reusable Slidev components (windows, stamps, nodes, placeholders)
- `styles/`: design tokens and slide primitives
- `public/assets/`: served event and logo assets
- `assets/`: original screenshot/photo source files

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
