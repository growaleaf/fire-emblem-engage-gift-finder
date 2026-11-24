# Fire Emblem Engage Gift Finder

Static page. Search an item to see which units love, like, or dislike it. Or pick a unit to see their full gift list.

## Data

Parsed from `../source_nightly.html` (nightlygamingbinge.com, "Fire Emblem Engage Gift Guide", published 2023-01-22, modified 2025-07-15, fetched 2026-11-24) via `../parse.py` into `../parsed.json`, then embedded in `data.js`.

28 units covered by the source. The game has more units than that; units not in the source are not listed, and nothing is invented to fill gaps.

## Files

- `index.html` — the page
- `data.js` — the 28 units' gift data (also usable from Node via `module.exports`)
- `test.js` — known-answer tests, run with `node test.js`

## Caveat

Single source. Community gift guides can disagree with each other and with in-game behavior. Verify in the in-game Ally Notebook.
