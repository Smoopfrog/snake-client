// Connection constants
const IP = '165.227.47.243';
const PORT = '50541';

//Direction constants
const upKey = "Move: up";
const leftKey = "Move: left";
const downKey = "Move: down";
const rightKey = "Move: right";

// Message constants
const messages = {
  'g': 'Say: Goodbye sneks!',
  'h': 'Say: Hello sneks!',
  'j': 'Say: Keep on sneking!'
};

module.exports = {
  IP,
  PORT,
  upKey,
  leftKey,
  downKey,
  rightKey,
  messages
};