import { promises as fsPromises } from "fs";

const copy = async () => {
  try {
    const isExistSource = await fsPromises
      .access("src/fs/files")
      .then(() => true)
      .catch(() => false);

    const isExistTarget = await fsPromises
      .access("src/fs/files_copy")
      .then(() => true)
      .catch(() => false);

    if (isExistTarget || !isExistSource) {
      throw new Error("FS operation failed");
    }

    await fsPromises.mkdir("src/fs/files_copy");
    const files = await fsPromises.readdir("src/fs/files");
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
