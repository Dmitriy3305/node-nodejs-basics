import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";
import path from "path";

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const sourceDir = path.join("src", "zip", "files", "archive.gz");
  const source = fs.createReadStream(sourceDir);
  const destinationDir = path.join("src", "zip", "files", "fileToCompress.txt");
  const destination = fs.createWriteStream(destinationDir);

  await pipelineAsync(source, gunzip, destination);

  await fs.promises.unlink(sourceDir);

  console.log("archive.gz successfully decompressed to fileToCompress.txt");
};

await decompress();
