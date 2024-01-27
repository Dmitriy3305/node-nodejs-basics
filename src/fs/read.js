import { promises as fsPromises } from "fs";

const read = async () => {
    try {
        const isExistSource = await fsPromises
          .access("src/fs/files/fileToRead.txt")
          .then(() => true)
          .catch(() => false);
    
        if (!isExistSource) {
          throw new Error("FS operation failed");
        }
    
        const fileContent = await fsPromises.readFile("src/fs/files/fileToRead.txt", 'utf-8');
        console.log(fileContent)
      } catch (error) {
        console.error(error);
      } 
};

await read();