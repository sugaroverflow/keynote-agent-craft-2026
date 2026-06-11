# Legacy PPTX Reference

This directory contains the previous PptxGenJS workflow and supporting assets. It is no longer the active source for the keynote.

## Current Workflow

Use the root-level Slidev deck instead:

```bash
npm run dev
npm run build
npm run export:png
npm run export:pdf
```

The active authoring files are `slides.md`, `components/`, `layouts/`, `styles/`, and `public/`.

## Legacy Regeneration

The old PPTX can still be regenerated for reference:

```bash
npm run build:legacy-pptx
```

The existing `agent-craft-keynote-draft.pptx`, `deck/src/build-deck.mjs`, and `deck/rendered/` artifacts are kept only as comparison material until the Slidev version is approved.
