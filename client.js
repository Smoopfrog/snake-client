const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // recieves data 
  conn.on("data", (data) => {
    console.log(data)
  });

  let name = 'JSS'
  let direction = 'up'

  // Connect event
  conn.on('connect', () => {
    console.log('Successfully connected to game server.')
    conn.write(`Name: ${name}`);
  })

  // Snek name
  return conn;
};

module.exports = connect;