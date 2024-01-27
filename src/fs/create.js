import { promises as fsPromises } from "fs";

const create = async () => {
  try {
    await fsPromises.access("src/fs/files/fresh.txt");
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fsPromises.writeFile(
        "src/fs/files/fresh.txt",
        "I am fresh and young",
        "utf8"
      );
      console.log("File created successfully");
    } else {
      console.error(err);
    }
  }
};

await create();
