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
  const interval = function(key) {
    myInterval = setInterval(() =>  connection.write(key), 50);
  } 
  
  //Exit game
  if (key === '\u0003') {
    process.stdout.write('Goodbye!\n');
    process.exit();
  }

  // Move up
  if(key === 'w') {
    clearInterval(myInterval);
    interval('Move: up');
  }

  // Move down
  if(key === 's') {
    clearInterval(myInterval);
    interval('Move: down');
  }

  // Move left
  if(key === 'a') {
    clearInterval(myInterval);
    interval('Move: left');
  }

  //Move right
  if(key === 'd') {
    clearInterval(myInterval);
    interval('Move: right');
  }

  // Say Hello sneks!
  if (key === 'h') {
    connection.write('Say: Hello sneks!')
  }

  // Say Goodbye sneks!
  if (key === 'g') {
    connection.write('Say: Goodbye sneks!')
  }

  // Say Keep on sneking! 
  if (key === 'j') {
    connection.write('Say: Keep on sneking! ')
  }
};

module.exports = setupInput;