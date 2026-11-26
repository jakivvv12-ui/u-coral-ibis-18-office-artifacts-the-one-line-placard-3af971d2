import { mkdirSync, writeFileSync } from "node:fs";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(out + "/entry.txt", "Stapler, c. 2019: Once bound documents with authority; now bound only by hope and one last staple.\n");
