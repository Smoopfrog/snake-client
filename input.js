const {upKey, leftKey, downKey, rightKey, messages} = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

let myInterval;

// Key inputs
const handleUserInput = (key) => {
 
  // interval function
  const interval = function(key) {
    myInterval = setInterval(() =>  connection.write(key), 50);
  };
  
  //Exit game
  if (key === '\u0003') {
    process.stdout.write('Goodbye!\n');
    process.exit();
  }

  // Move up
  if (key === 'w') {
    clearInterval(myInterval);
    interval(upKey);
  }

  // Move down
  if (key === 's') {
    clearInterval(myInterval);
    interval(downKey);
  }

  // Move left
  if (key === 'a') {
    clearInterval(myInterval);
    interval(leftKey);
  }

  //Move right
  if (key === 'd') {
    clearInterval(myInterval);
    interval(rightKey);
  }

  // Send messages
  if (messages[key]) {
    connection.write(messages[key]);
  }
};

module.exports = setupInput;