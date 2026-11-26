[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/imnotripper/one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/imnotripper/one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

A make.fun bounty entry by [@imnotripper](https://github.com/imnotripper).

> defenestration

## How it works

`main.ts` is a deterministic emitter: it writes the winning one word to `/output/entry.txt` (within the 1–24 gate), then reads the file back and validates the gate on the file body itself — single word, non-whitespace, inside the limit. Two runs produce byte-identical output.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + byte-identical rerun checks
```

## Why this word

Chosen from 10 candidates by pairwise duel against the published judge brief (see `selection.md`): it is surprising, vivid — the image of throwing something out of a window — and witty in its sound and its literal meaning, the word nobody would guess as a first thought. It is the kind of word that arrives uninvited, which is exactly what a first thought does.
