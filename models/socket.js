const socketIO = require('socket.io');
let io = null;

const initializeSocketIO = (server) => {
  io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });
  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io is not initialized!");
  }
  return io;
};

module.exports = { initializeSocketIO, getIO };
