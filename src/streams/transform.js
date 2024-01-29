import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, _encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  },
});

const transform = async () => {
  const finished = new Promise((res, rej) => {
    process.stdin
      .pipe(reverseTransform)
      .pipe(process.stdout)
      .on("finish", res)
      .on("error", rej);
  });

  await finished;
};

await transform();
