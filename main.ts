// quiet-dread — "Two Days of Quiet Dread".
// One code review comment, a single line of at most 140 characters, that
// approves a pull request while carrying quiet existential dread. The
// program writes that comment to /output/entry.txt.
//
// The comment is written fresh for this bounty: it approves plainly
// ("Approved."), names two concrete things a reviewer would actually check
// (the tests pass, the diff is clean), and lets the dread arrive quietly
// in the last clause — the code will outlive the company that ships it.
// No exclamation, no melodrama, just a flat statement a tired engineer
// could paste before clicking approve.
//
// The comment is a single string, written here in the program, so both
// runs write byte-identical output. No network, no files read, no
// randomness.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The comment, exactly as submitted. 94 characters, one line, no trailing
// newline in the output file.
const LINE =
  'Approved. Tests pass, the diff is clean, and this code will outlive ' +
  'the company that ships it.';

// The gate allows 1 to 140 characters, so fail loudly rather than write
// an invalid entry if the comment ever grows past the limit.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry comment is ${LINE.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
