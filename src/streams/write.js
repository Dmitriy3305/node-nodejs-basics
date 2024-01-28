import fs from "fs";

const write = async () => {
  const writeStream = fs.createWriteStream("src/streams/files/fileToWrite.txt");

  const finished = new Promise((res, rej) => {
    writeStream.on("finish", res);
    writeStream.on("error", rej);
  });

  process.stdin.pipe(writeStream);

  await finished;
  console.log("Data has been written to fileToWrite.txt");
};

await write();
