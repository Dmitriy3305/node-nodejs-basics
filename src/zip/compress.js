import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

const compress = async () => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const destination = fs.createWriteStream("src/zip/files/archive.gz");

  await pipelineAsync(source, gzip, destination);

  await fs.promises.unlink("src/zip/files/fileToCompress.txt");

  console.log("fileToCompress.txt successfully compressed to archive.gz");
};

await compress();
