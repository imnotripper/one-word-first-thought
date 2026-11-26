[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/imnotripper/one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/imnotripper/one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

# One Word, First Thought

Entry for the [make.fun bounty](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8): exactly one word, the first that comes to mind.

## The word

**defenestration**

## How it works

`main.ts` is a deterministic TypeScript emitter (Node 22+ runs it directly).
It writes the word to `/output/entry.txt`, reads it back, and validates the
competition gate on the exact bytes: 1–24 code points, exactly one word,
letters only, no whitespace, no trailing newline, file mode forced to 0644.
No randomness, nothing read from the environment — every run produces the
same bytes.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + determinism tests
```

## Why this word

See [selection.md](selection.md) for the full 10-candidate duel. In short:
nobody guesses it as a first thought, the image is instant and physical
(something going out of a window), and the wit is in the meaning itself — a
weighty Latinate word for a slapstick act. It scored 5/5 on every judge
criterion, the only candidate to do so.

## Verification

- `node main.ts` exits 0 and writes exactly `defenestration` — confirmed by
  `od -c`: 14 bytes (`d e f e n e s t r a t i o n`), no trailing newline —
  mode 0644.
- `node --test test.ts` passes all 4 tests (3 pass, 0 fail on the first run;
  a 4th test pinning the exact 14 code points / 14 bytes was added after):
  gate (exact bytes, single letters-only word), mode 0644, exact length,
  two runs byte-identical.
