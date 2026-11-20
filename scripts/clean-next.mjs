import { rm } from "node:fs/promises";
import { resolve } from "node:path";

await Promise.all([
  rm(resolve(".next"), { recursive: true, force: true }),
  rm(resolve(".next-dev"), { recursive: true, force: true }),
]);
