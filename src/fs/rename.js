import { promises as fsPromises } from "fs";
import path from "path";

const rename = async () => {
  const sourceDir = path.join("src", "fs", "files", "properFilename.md");
  const isExistSource = await fsPromises
    .access(sourceDir)
    .then(() => true)
    .catch(() => false);

  const targetDir = path.join("src", "fs", "files", "wrongFilename.txt");
  const isExistTarget = await fsPromises
    .access(targetDir)
    .then(() => true)
    .catch(() => false);

  if (isExistSource || !isExistTarget) {
    throw new Error("FS operation failed");
  }

  await fsPromises.rename(targetDir, sourceDir);
};

await rename();
