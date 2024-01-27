import { promises as fsPromises } from "fs";

const remove = async () => {
  try {
    await fsPromises.unlink("src/fs/files/fileToRemove.txt");
  } catch (error) {
    throw new Error("FS operation failed");
  }
};
await remove();
