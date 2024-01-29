import { promises as fsPromises } from "fs";
import path from "path";

const copy = async () => {
  try {
    const sourceDir = path.join("src", "fs", "files");
    const targetDir = path.join("src", "fs", "files_copy");
    const isExistSource = await fsPromises
      .access(sourceDir)
      .then(() => true)
      .catch(() => false);

    const isExistTarget = await fsPromises
      .access(targetDir)
      .then(() => true)
      .catch(() => false);

    if (isExistTarget || !isExistSource) {
      throw new Error("FS operation failed");
    }

    await fsPromises.mkdir(targetDir);
    const files = await fsPromises.readdir(sourceDir);
    for (const file of files) {
      await fsPromises.copyFile(
        `src/fs/files/${file}`,
        `src/fs/files_copy/${file}`
      );
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
