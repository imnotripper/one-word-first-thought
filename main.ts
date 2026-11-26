// One Word, First Thought — deterministic emitter.
//
// Writes exactly one word to /output/entry.txt, then reads it back and
// validates the competition gate on the exact bytes: 1-24 code points,
// exactly one word, letters only, no whitespace, no trailing newline,
// file mode forced to 0644. No randomness, nothing read from the
// environment — the same bytes come out on every run.

import { chmodSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "defenestration";
const OUT = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  const points = [...text];
  if (points.length < 1 || points.length > 24) {
    fail(`length ${points.length} code points, must be 1-24`);
  }
  if (text.trim().length === 0) {
    fail("entry is only whitespace");
  }
  if (text !== text.trim()) {
    fail("leading or trailing whitespace");
  }
  if (/\s/.test(text)) {
    fail("more than one word");
  }
  if (!/^\p{L}+$/u.test(text)) {
    fail("not letters only");
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, { encoding: "utf8", mode: 0o644 });
chmodSync(OUT, 0o644);

// Byte-exact check first: reading as a Buffer catches any encoding
// surprise that a "utf8" string read would silently replace.
const raw = readFileSync(OUT);
if (!raw.equals(Buffer.from(WORD, "utf8"))) {
  fail("written bytes differ from the word");
}
if (raw.includes(0x0a) || raw.includes(0x0d)) {
  fail("entry contains a newline");
}

const back = raw.toString("utf8");
if (back !== WORD) {
  fail("read-back mismatch");
}
validate(back);

const mode = statSync(OUT).mode & 0o777;
if (mode !== 0o644) {
  fail(`mode ${mode.toString(8)}, expected 644`);
}

console.log(
  `wrote ${OUT}: ${WORD} (${[...WORD].length} chars, ${Buffer.byteLength(WORD, "utf8")} bytes, mode 0644)`,
);
