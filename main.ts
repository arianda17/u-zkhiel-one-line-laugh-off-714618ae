const ENTRY = "The self-checkout told me 'unexpected item in bagging area' and I've never felt more seen.";

import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY, { encoding: 'utf8' });
console.log(ENTRY);
