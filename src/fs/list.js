import { promises as fsPromises } from "fs";

const list = async () => {
    try {
        const isExistSource = await fsPromises
          .access("src/fs/files")
          .then(() => true)
          .catch(() => false);
    
        if (!isExistSource) {
          throw new Error("FS operation failed");
        }
    
        const files = await fsPromises.readdir("src/fs/files");
        for (const file of files) {
         console.log(file);
        }
      } catch (error) {
        console.error(error);
      }
};

await list();