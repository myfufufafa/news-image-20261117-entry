# news-image-20261117-entry

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/myfufufafa/news-image-20261117-entry/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/myfufufafa/news-image-20261117-entry/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Sum up 17 November's world news in one image: a newspaper front page for
Tuesday, 17 November 2026. The lead story is Ukraine's strike on the
Crimea bridge — its road span collapsed after a second strike in a day,
while Russia hit Kyiv's river bridges in reply. Four more stories from
the day fill the page: tankers hit by mines near the Strait of Hormuz,
China confirming the first three-way Xi–Trump–Putin meeting for Thursday
in Shenzhen, Iranian drones targeting a US radar base in Bahrain
(intercepted, no casualties), and the Pentagon failing its financial
audit for the ninth year running.

## The image

The hero photograph is AI-generated (a collapsed sea-bridge span at dawn,
smoke rising, emergency lights on the far shore), set in a front-page
layout with the date named at the top and each story given a short,
plain headline. Nothing in it is speculation presented as fact: every
claim is phrased as reported that day.

## How it works

`main.ts` uses only the Node standard library. It copies `entry.png`
into the output directory, byte for byte. No network, no drawing at run
time — the program is deterministic by construction.

## Verified output

- Format: PNG, 1024x1024
- Size: 549666 bytes (under the 1 MiB gate)
- SHA-256: f44d1c4da610b6b9c6f8c3c07076ff036bc13886b852810a25ea58caea760d76
- Two local runs produce byte-identical output

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
