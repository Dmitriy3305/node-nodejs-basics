import { promises as fsPromises } from "fs";
import path from "path";

const read = async () => {
  const targetDir = path.join("src", "fs", "files", "fileToRead.txt");
  try {
    const isExistSource = await fsPromises
      .access(targetDir)
      .then(() => true)
      .catch(() => false);

    if (!isExistSource) {
      throw new Error("FS operation failed");
    }

    const fileContent = await fsPromises.readFile(targetDir, "utf-8");
    console.log(fileContent);
  } catch (error) {
    console.error(error);
  }
};

await read();
