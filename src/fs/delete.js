import { promises as fsPromises } from "fs";
import path from "path";

const remove = async () => {
  try {
    const targetDir = path.join("src", "fs", "files", "fileToRemove.txt");
    await fsPromises.unlink(targetDir);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
await remove();
