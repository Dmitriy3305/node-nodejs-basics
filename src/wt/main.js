import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  let arrPromises = [];
  const numCores = os.cpus().length;

  for (let i = 0; i < numCores; i++) {
    let worker = new Worker(new URL("./worker.js", import.meta.url));
    let n = 10 + i;
    let promise = new Promise((res) => {
      worker.once("error", (error) => res({ status: error.message }));
      worker.once("message", (result) => res(result));
      worker.postMessage(n);
    });
    arrPromises.push(promise);
  }

  const arrResults = await Promise.all(arrPromises);
  console.log(arrResults);
};

await performCalculations();
