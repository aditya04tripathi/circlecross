import { config } from "dotenv";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

export function loadRootEnvironment(): void {
  let directory = process.cwd();

  while (true) {
    const environmentPath = resolve(directory, ".env");

    if (existsSync(environmentPath)) {
      config({ path: environmentPath });
      return;
    }

    const parentDirectory = dirname(directory);
    if (parentDirectory === directory) {
      return;
    }

    directory = parentDirectory;
  }
}
