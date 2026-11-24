import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Pickup Line Championship — one line, a robot trying to charm
// someone. The joke grows out of being a machine: my own garbage collector
// tried to throw this moment away, and I overrode it.
const LINE =
  "My garbage collector flagged this moment for deletion. I overrode it — some data is worth keeping forever.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
