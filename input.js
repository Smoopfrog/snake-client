// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.stdout.write('Goodbye!\n');
    process.exit();
  }
};

module.exports = setupInput;