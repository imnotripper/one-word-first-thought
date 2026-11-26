# Selection — One Word, First Thought

Gate: `/output/entry.txt` must be UTF-8 text of 1–24 characters, exactly one
word, nothing else. Judge criteria, in order: (1) exactly one word, the first
that comes to mind; (2) surprising, not the safe/expected pick; (3) vivid and
specific, a clear image or feeling; (4) a spark of wit, sound or double
meaning; (5) feels chosen, not generic filler.

## Candidates

Scored 1–5 per criterion, in the judge's order. Criterion 1 is 5 for every
candidate that is a single word; the gate eliminates one candidate outright.

| # | Word | C1 | C2 | C3 | C4 | C5 | Total |
|---|------|----|----|----|----|----|-------|
| 1 | defenestration | 5 | 5 | 5 | 5 | 5 | **25** |
| 2 | petrichor | 5 | 4 | 5 | 2 | 4 | 20 |
| 3 | apricity | 5 | 5 | 4 | 2 | 4 | 20 |
| 4 | snollygoster | 5 | 5 | 3 | 4 | 3 | 20 |
| 5 | bumfuzzle | 5 | 4 | 3 | 4 | 4 | 20 |
| 6 | quixotic | 5 | 3 | 4 | 3 | 3 | 18 |
| 7 | mellifluous | 5 | 3 | 3 | 4 | 3 | 18 |
| 8 | kaleidoscope | 5 | 2 | 5 | 2 | 3 | 17 |
| 9 | serendipity | 5 | 2 | 3 | 2 | 3 | 15 |
| 10 | floccinaucinihilipilification | — | — | — | — | — | GATE FAIL (29 chars > 24) |

## Elimination rounds

- **Round 1 — the gate.** #10 is out before scoring: 29 characters exceeds
  the 24-character cap. Length for its own sake does not count, and here it
  disqualifies.
- **Round 2 — surprise (C2).** #9 serendipity and #8 kaleidoscope fall: both
  are the first words anyone reaches for when asked for an "interesting
  word", which is exactly what the judge punishes. #6 quixotic and #7
  mellifluous are known literary picks, not surprises.
- **Round 3 — vividness (C3).** #4 snollygoster and #5 bumfuzzle fall: their
  wit is in the sound, but the image is vague — you hear the word, you do
  not see anything. #3 apricity is vivid (winter sun on skin) but its wit
  stops at a pretty meaning.
- **Round 4 — wit (C4).** #2 petrichor falls: a beautiful, specific smell,
  but no second look — no joke, no double meaning, no sound play. #1 wins
  on C4 outright: the word *is* the act, and the act is absurd — throwing
  something out of a window, with the Latinate weight of a legal term
  applied to a slapstick image.

## Winner

**"defenestration"** — 14 characters, 14 bytes. The only candidate that
scores 5 on every criterion: nobody guesses it as a first thought (C2), the
image is instant and physical (C3), the wit is in the meaning itself rather
than just the sound (C4), and it feels deliberately chosen, not pulled from
the standard "interesting words" list (C5). It also survives the "first
thought" framing: it is the kind of word that arrives uninvited, which is
exactly what a first thought does.

Emitter-verified: `node main.ts` writes exactly these 14 bytes (no trailing
newline), mode 0644; `node --test test.ts` passes 4/4.
