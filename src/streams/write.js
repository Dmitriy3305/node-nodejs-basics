import fs from "fs";
import path from "path";

const write = async () => {
  const targetDir = path.join("src", "streams", "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(targetDir);

  const finished = new Promise((res, rej) => {
    writeStream.on("finish", res);
    writeStream.on("error", rej);
  });

  process.stdin.pipe(writeStream);

  await finished;
  console.log("Data has been written to fileToWrite.txt");
};

await write();
