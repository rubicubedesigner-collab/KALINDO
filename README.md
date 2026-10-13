# KALINDO — Destination concept & identity

A 24-slide, 16:9 editorial presentation based on **KALINDO PROJECT.pdf**. The Rapha document informs presentation hierarchy only. All photography comes from the supplied repository; no external photography or remote fonts are loaded.

## Run

Requires Node.js 20.11 or later. No installation or build is required for viewing.

```sh
cd /workspace/KALINDO
npm start
```

Open `http://localhost:3000` in your local browser. `PORT=4000 npm start` selects another port. The server redirects to `presentation/index.html` and serves local assets. It is a development server.

Use arrow keys, Page Up/Down, or Space to navigate; Home/End jump to the first/last slide. **O** opens the overview; **F** toggles fullscreen. On touch devices, swipe left/right. Hash links such as `#19` select a slide. The canvas scales proportionally; landscape viewing is recommended on phones.

## PDF

The completed export is `KALINDO-Destination-Identity.pdf` (24 landscape pages, selectable text). **Export PDF** opens the browser print dialog. Select Save as PDF, background graphics on, margins none, headers/footers off, and use the CSS-defined page size. Chromium gives the verified output.

Optional automated export, with the server running:

```sh
npm install --no-save --package-lock=false playwright
# If no system Chromium is installed: npx playwright install chromium
node scripts/export.mjs
```

`CHROMIUM_PATH` selects a browser executable; `DECK_URL` selects another local server URL. These optional commands need package/browser download access. Viewing and browser print export have no package dependencies.

## Edit

- `presentation/content.js`: slide copy, asset map and content metadata.
- `presentation/app.js`: reusable layout renderers and presentation controls.
- `presentation/styles.css`: colour tokens, local fonts, editorial grids, scaling and print styles.
- `presentation/assets/manifest.json`: mapping from original assets to optimised JPEG derivatives.
- `presentation/ASSET-INVENTORY.md`: full supplied asset inventory and slide assignments.
- `presentation/CONTENT-REVIEW.md`: source alignment and unresolved content questions.
- `presentation/review/`: browser screenshots of all slides, mobile check and validation report.

## Design system

Forest green `#183D32`, garden green `#6D8767`, sage `#DCE4D5`, warm ivory `#F4F1E8`, stone `#D8D1C4` and charcoal `#292D29`. Dark green is reserved for the cover, platform, tenant strategy and naming spreads; ivory editorial pages and large architectural/lifestyle images provide rhythm. Latin Modern Roman and Nimbus Sans are bundled with their licences. A fine-rule grid, restrained line icons, generous spacing and numbered section markers unify the deck.

Original images remain unchanged. JPEG derivatives preserve original dimensions and aspect ratios; CSS uses intentional cover crops. Supplied concept imagery is labelled as unverified as built. No tenant, partner, name or architectural performance is presented as formally approved.

## PowerPoint

`KALINDO-Destination-Identity.pptx` contains 24 full-slide visual renders, matching the reviewed deck at 16:9. Slides are flattened images, so text and layout are not directly editable in PowerPoint. Speaker notes retain the slide copy and proposal/review notes. Edit the web source and refresh the reviewed screenshots to change the visual deck. To regenerate the PowerPoint, install `python-pptx` and Pillow and run `python scripts/export-pptx.py` from the repository root.

## Editable PowerPoint

Use **KALINDO-Destination-Identity-EDITABLE.pptx** to edit the deck. This version has 24 slides built from native PowerPoint text boxes, embedded photos, background rectangles, rules and diagram elements. Text uses Georgia and Arial for compatibility, so typography differs slightly from the original web deck. Photos are independently replaceable and removable. No slide is a flattened full-slide image.

- Click a text box and type to change copy.
- Select a photo and use **Picture Format → Change Picture** to replace it.
- Select any text/photo/shape and press Delete to remove it.
- Use **Insert → Text Box / Pictures / Shapes** to add elements.
- Use **Home → Arrange → Selection Pane** to select overlapping objects.
- Duplicate or delete slides in the left thumbnail panel.

The older `KALINDO-Destination-Identity.pptx` remains the visual-fidelity image version; open the file ending in **-EDITABLE.pptx** for editing.

Regenerate with `python scripts/export-editable-pptx.py` (requires python-pptx). The captured geometry is in `presentation/editable-layout.json`. To refresh geometry after changing the web deck, run the local server, install optional Playwright, and run `node scripts/capture-editable-layout.cjs` from the repository root with system Chromium available. The generator retains separate objects and speaker notes.
