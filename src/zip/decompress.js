import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const source = fs.createReadStream("src/zip/files/archive.gz");
  const destination = fs.createWriteStream("src/zip/files/fileToCompress.txt");

  await pipelineAsync(source, gunzip, destination);

  await fs.promises.unlink("src/zip/files/archive.gz");

  console.log("archive.gz successfully decompressed to fileToCompress.txt");
};

await decompress();
