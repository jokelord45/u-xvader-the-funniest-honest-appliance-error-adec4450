import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Error: two socks went in, one came out. I searched the drum twice. It is empty. I do not know where it goes either.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
