# KALINDO — Complete Brief / 29 slides

This edition follows the newly uploaded **KALINDO PROJECT (1).pdf**, with all 29 numbered sections preserved. It is a separate deck; the earlier 24-slide presentation remains available.

## Deliverables

- `KALINDO-Complete-Brief-29-Slides-EDITABLE.pptx`: 29 slides, with individually editable text boxes, embedded photos, table-cell text and backgrounds, rules and diagrams. All source copy remains visible on the slides. The entire corresponding source section also appears in speaker notes. Use PowerPoint's Selection Pane to select overlapping elements.
- `KALINDO-Complete-Brief-29-Slides.pdf`: 29 landscape pages rendered from the editable PowerPoint.
- `KALINDO-Complete-Brief-29-Slides-Source.zip`: web presentation, content, local assets/fonts, run/export scripts and review documentation.

The PowerPoint uses Georgia and Arial for portability. It is not made of full-slide screenshots. Text, photos, shapes and individual table cells can be changed or deleted. Web viewing uses the bundled editorial fonts.

## Run the web presentation

From the repository root, run `npm start` using Node.js 20.11 or newer. No dependency installation is needed. Open `http://localhost:3000/presentation29/index.html`. Arrow keys/Space navigate; O opens the overview; F enters fullscreen; Home/End jump to the first/last slide. Touch swipes and browser print export are supported.

## Source fidelity

All source wording, figures, table cells, URLs and notes are retained. The original spelling and case are kept. Only extraction artefacts are normalised: zero-width characters, line wraps, split table words and bullet styling. The long Wonderfood URL is rejoined across its PDF line break. Tables are reconstructed in row/column order without rewriting their cells.

“Visual” directions and “Catatan” notes are visible in the **BRIEF NOTES · PRESERVED VERBATIM** band. The source slide titles are maintained. The PDF's 15 A4 pages are converted to its 29 declared slides.

Competitor claims, tenant assumptions and financial values are reproduced from the brief, without independent market verification or financial recalculation. No research date was provided, so research slides explicitly say “research date not specified”. The original validation caveats remain visible. No tenant, operator, revenue, partnership or return metric has been newly invented.

The market diagram labels repeat terms from the brief. Supplied KALINDO images are concept visuals, not verified as built. The Nagoya Hill photograph is identified as a city reference. No competitor photographs or architectural site plans were fabricated. Area and adjacency tables communicate the source's figures/relationships; they do not assert unprovided geometric layouts.

## Design

Forest green, garden green, sage and warm ivory; refined editorial typography, generous margins, thin rules and restrained image placements. Green statement pages punctuate light research and table spreads. The original images remain unchanged.

## Edit / regenerate

- `content.json`: all slide content, table cells, source sections and notes.
- `app.js`: slide layouts, controls and rendering.
- `styles.css`: tokens, grids, sizing and print layout.
- `editable-layout.json`: captured object geometry for editable PowerPoint export.
- `brief-extracted.txt`: complete extracted source wording.

To refresh PowerPoint after web changes, run the server, install the optional Playwright tool (`npm install --no-save --package-lock=false playwright`), and run `node scripts/capture-29-layout.cjs` from the repository root with `/usr/bin/chromium` available. Then run `python scripts/export-29-editable-pptx.py` (requires python-pptx). PowerPoint edits do not automatically update the web source.

For a matching PDF, open the PPTX in PowerPoint and Export to PDF, or use LibreOffice: `soffice --headless --convert-to pdf --outdir /tmp/kalindo-export KALINDO-Complete-Brief-29-Slides-EDITABLE.pptx`.

## Validation evidence

`review/source-fidelity.json` checks that each source section retains its non-whitespace, non-bullet characters through table reconstruction. Ordered narrative passages and all table cells are separately checked against the rendered PDFs: **408 source phrases, none missing**. `review/validation.json` records successful browser checks on all 29 slides, navigation, fullscreen, mobile fit and image loading, with no out-of-bounds text. `review/editable-validation.json` confirms native editable text and independent photos, plus successful text-edit, element-add and photo-delete operations in a temporary PowerPoint copy. All 29 PowerPoint slides were rendered and visually reviewed.
