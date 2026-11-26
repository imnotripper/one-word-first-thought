// Tests for the one-word-first-thought emitter: run the program, then
// check the gate on what it actually wrote.
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const EXPECTED = 'defenestration';

test('emitter writes a valid single-word entry', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const text = readFileSync('/output/entry.txt', 'utf8');
  const body = text.replace(/\n$/, '');
  assert.equal(body, EXPECTED);
  assert.ok(!body.includes('\n'), 'must be a single line');
  assert.equal(body.trim().split(/\s+/).length, 1, 'must be exactly one word');
  const chars = [...body].length;
  assert.ok(chars >= 1 && chars <= 24, `gate needs 1-24 chars, got ${chars}`);
  assert.ok(body.trim().length > 0, 'must not be only white space');
  // 14 is the emitter's own count for "defenestration"; it must match what
  // main.ts prints, not a hand count. (Verified on the first emitter run.)
  assert.equal(chars, 14);
});

test('two runs are byte-identical', () => {
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const first = readFileSync('/output/entry.txt');
  execFileSync(process.execPath, ['main.ts'], { cwd: import.meta.dirname });
  const second = readFileSync('/output/entry.txt');
  assert.deepEqual(first, second);
});
