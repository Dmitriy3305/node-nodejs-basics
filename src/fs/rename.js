import { promises as fsPromises } from "fs";

const rename = async () => {
  const isExistSource = await fsPromises
    .access("src/fs/files/properFilename.md")
    .then(() => true)
    .catch(() => false);

  const isExistTarget = await fsPromises
    .access("src/fs/files/wrongFilename.txt")
    .then(() => true)
    .catch(() => false);

  if (isExistSource || !isExistTarget) {
    throw new Error("FS operation failed");
  }

  await fsPromises.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md"
  );
};

await rename();
