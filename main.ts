// news-image-20261117 v2: one image summing up Tuesday 17 November 2026.
//
// The front page is rendered at build time and shipped in this repository
// as entry.png (JPEG bytes in a file named entry.png, which RULES.txt
// allows: the file is told apart by its first bytes). It is a dense
// newspaper front page, "THE WORLD TODAY — TUESDAY, 17 NOVEMBER 2026",
// with the collapsed Crimea bridge as the hero photo, 32 numbered
// headlines from six continents, and a small world-map panel at the
// bottom. The five verified leads from v1 are kept: the Crimea bridge
// strike, tankers mined near the Strait of Hormuz, the Xi-Trump-Putin
// meeting set for Shenzhen, Iranian drones at the US radar in Bahrain,
// and the Pentagon failing its audit for the ninth year.
//
// This program does no drawing and no fetching: it places that exact
// image at /output/entry.png, byte for byte. That is the simplest entry
// RULES.txt describes — a repo holding the image and a one-line program
// that copies it there.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The run is deterministic: same input file, same output bytes, every time.
// Verified 18 Nov 2026 — two runs, one sha256 for both outputs:
// 6eeb93856086d6f35b822ec835bf9a6f3ede5b11e40a7eec7109e1848be0dfb3
// (JPEG, 1024x1024, 333236 bytes — under the 1 MiB gate and under v1's
// 549666 bytes).

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
