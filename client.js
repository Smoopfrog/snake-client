const net = require("net");
const stdin = process.stdin;

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // recieves data 
  conn.on("data", (data) => {
    console.log(data)
  });

  let name = 'JSS'
  // let direction = 'up'
  // Connect event
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write(`Name: ${name}`);
    setInterval(() =>  conn.write(`Move: ${direction}`), 50);
  })

  // Snek name
  return conn;
};

module.exports = connect;