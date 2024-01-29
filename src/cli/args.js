const parseArgs = () => {
  let output = "";
  for (let i = 2; i < process.argv.length; i += 2) {
    const argName = process.argv[i].slice(2);
    const argValue = process.argv[i + 1];
    output += `${argName} is ${argValue}, `;
  }
  output = output.slice(0, -2);
  console.log(output);
};

parseArgs();
