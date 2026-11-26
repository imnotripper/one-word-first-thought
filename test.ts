// Tests for the one-word emitter (node --test test.ts).
//
// Gate checks run against the file main.ts actually wrote: strict UTF-8
// decoding, exact bytes, a single letters-only word, mode 0644, and two
// runs producing byte-identical output.

import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = "/output/entry.txt";
const WORD = "defenestration";
const MAIN = fileURLToPath(new URL("./main.ts", import.meta.url));

function runEmitter(): void {
  const result = spawnSync(process.execPath, [MAIN], { encoding: "utf8" });
  assert.equal(result.status, 0, `main.ts exited ${result.status}: ${result.stderr}`);
}

test("gate: exact bytes, single word, letters only", () => {
  runEmitter();
  const bytes = readFileSync(OUT);
  assert.deepEqual(bytes, Buffer.from(WORD, "utf8"));
  const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  assert.equal(text, WORD);
  assert.ok([...text].length >= 1 && [...text].length <= 24);
  assert.match(text, /^\p{L}+$/u);
  assert.equal(text.trim(), text);
});

test("file mode is 0644", () => {
  runEmitter();
  assert.equal(statSync(OUT).mode & 0o777, 0o644);
});

test("word is 14 code points and 14 bytes", () => {
  runEmitter();
  const bytes = readFileSync(OUT);
  assert.equal(bytes.length, 14);
  assert.equal([...new TextDecoder("utf-8", { fatal: true }).decode(bytes)].length, 14);
});

test("two runs are byte-identical", () => {
  runEmitter();
  const first = readFileSync(OUT);
  runEmitter();
  const second = readFileSync(OUT);
  assert.deepEqual(first, second);
});
