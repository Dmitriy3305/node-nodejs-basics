import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  const targetDir = path.join("src", "streams", "files", "fileToRead.txt");
  const stream = createReadStream(targetDir);

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("error", (error) => {
    console.error("Error:", error);
  });

  return new Promise((res, rej) => {
    stream.on("end", res);
    stream.on("error", rej);
  });
};

await read();
