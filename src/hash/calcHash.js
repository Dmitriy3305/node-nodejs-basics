import { createReadStream } from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const stream = createReadStream(
      "src/hash/files/fileToCalculateHashFor.txt"
    );
    const hash = createHash("sha256");

    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      const hashHex = hash.digest("hex");
      console.log(`SHA256 hash of the file: ${hashHex}`);
      resolve(hashHex);
    });

    stream.on("error", (error) => {
      console.error("Error while calculating the hash:", error);
      reject(error);
    });
  });
};

await calculateHash();
