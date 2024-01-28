const spawnChildProcess = async (args) => {
  const { spawn } = await import("child_process");

  const childProcess = spawn("node", ["src/cp/files/script.js", ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  childProcess.on("message", (message) => {
    console.log("Message:", message);
  });

  childProcess.on("error", (error) => {
    console.error("Error:", error);
  });

  childProcess.on("close", (code) => {
    console.log(`Child process exited ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
