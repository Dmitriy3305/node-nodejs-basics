import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";
import path from "path";

const pipelineAsync = promisify(pipeline);

const compress = async () => {
  const gzip = zlib.createGzip();
  const sourceDir = path.join("src", "zip", "files", "fileToCompress.txt");
  const source = fs.createReadStream(sourceDir);
  const destinationDir = path.join("src", "zip", "files", "archive.gz");
  const destination = fs.createWriteStream(destinationDir);

  await pipelineAsync(source, gzip, destination);

  await fs.promises.unlink(sourceDir);

  console.log("fileToCompress.txt successfully compressed to archive.gz");
};

await compress();
