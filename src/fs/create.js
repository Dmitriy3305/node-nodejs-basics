import { promises as fsPromises } from "fs";
import path from "path";

const create = async () => {
  const targetDir = path.join("src", "fs", "files", "fresh.txt");
  try {
    await fsPromises.access(targetDir);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fsPromises.writeFile(targetDir, "I am fresh and young", "utf8");
      console.log("File created successfully");
    } else {
      console.error(err);
    }
  }
};

await create();
