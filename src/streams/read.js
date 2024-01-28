import { createReadStream } from "fs";

const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt");

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
