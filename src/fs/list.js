import { promises as fsPromises } from "fs";
import path from "path";

const list = async () => {
  const targetDir = path.join("src", "fs", "files");
  try {
    const isExistSource = await fsPromises
      .access(targetDir)
      .then(() => true)
      .catch(() => false);

    if (!isExistSource) {
      throw new Error("FS operation failed");
    }

    const files = await fsPromises.readdir(targetDir);
    console.log(files);
  } catch (error) {
    console.error(error);
  }
};

await list();
