const randomNumeric = require("../util");
const { Step, Room } = require("../room-obj.js");
const { Variant, Player } = require("olympus-bg");
const Bot = require("../bot");

/* ROOM EVENT LISTENERS */

function room(socket, io, rooms = io.sockets.adapter.rooms) {
  // Room event: start room
  socket.on("event/start-room", (options, acknowledge) => {
    // Generate a random, unique room name string
    let roomName = randomNumeric(4);
    while (roomName in rooms) roomName = randomNumeric(5);

    // Leave previous room if already in one that's not this one
    if (socket.currentRoom && socket.currentRoom !== roomName) {
      rooms[socket.currentRoom].removePlayer(socket.id);
      socket.leave(socket.currentRoom);
    }

    socket.join(roomName);
    // 1. Set the current room reference on this socket
    // 2. Initialize the room object
    // 3. Add this player to the room object
    // 4. Send an acknowledgement with room name back and player enum to the client

    socket.currentRoom = roomName;
    rooms[roomName] = Room();
    rooms[socket.currentRoom].addPlayer(socket.id);
    acknowledge({
      ok: true,
      roomName,
      player: rooms[socket.currentRoom].players[socket.id],
    });
    if (options.withBot) new Bot(roomName);
  });

  // Room event: join room
  socket.on("event/join-room", (roomName, acknowledge) => {
    // Check if the room exists
    if (!rooms[roomName]) {
      console.log("Room Does not exist");
      return acknowledge({ ok: false, roomName });
    }

    // Leave previous room if already in one that's not this one
    if (socket.currentRoom && socket.currentRoom !== roomName) {
      rooms[socket.currentRoom].removePlayer(socket.id);
      socket.leave(socket.currentRoom);
    }

    // 1. Set the current room reference on this socket
    // 2. Add this player to the room object
    // 3. Send an acknowledgement with room name back and player enum to the client

    rooms[roomName].addPlayer(socket.id);
    acknowledge({
      ok: true,
      roomName,
      player: rooms[roomName].players[socket.id],
    });

    // Broadcast all relevant room properties to everyone in the room
    io.sockets.in(roomName).emit("room/update-room", {
      step: rooms[roomName].step,
      dice: rooms[roomName].dice,
      variant: rooms[roomName].variant,
      score: rooms[roomName].score,
      board: rooms[roomName].board.publicProperties(),
      players: rooms[roomName].players,
    });
    socket.currentRoom = roomName;
    socket.join(roomName);
  });

  // Room event: select variant
  socket.on("room/select-variant", (variant, acknowledge) => {
    if (!socket.currentRoom) return;
    if (rooms[socket.currentRoom].players[socket.id] !== Player.white) return;
    if (rooms[socket.currentRoom].step !== Step.setup) return;
    if (!Object.values(Variant).includes(variant)) return;

    rooms[socket.currentRoom].initGame(variant);
    acknowledge({ ok: true });

    // Broadcast the relevant room properties to everyone in the room
    io.sockets.in(socket.currentRoom).emit("room/update-room", {
      step: rooms[socket.currentRoom].step,
      variant: rooms[socket.currentRoom].variant,
      board: rooms[socket.currentRoom].board.publicProperties(),
    });
  });

  // Room event: roll to go first
  socket.on("room/starting-roll", () => {
    if (!socket.currentRoom) return;
    if (rooms[socket.currentRoom].players[socket.id] === Player.neither) return;
    if (rooms[socket.currentRoom].step !== Step.startingRoll) return;

    rooms[socket.currentRoom].startingRoll(rooms[socket.currentRoom].players[socket.id]);

    // Broadcast the relevant room properties to everyone in the room
    io.sockets.in(socket.currentRoom).emit("room/update-room", {
      step: rooms[socket.currentRoom].step,
      dice: rooms[socket.currentRoom].dice,
      board: rooms[socket.currentRoom].board.publicProperties(),
    });
  });

  socket.on("room/leave-room", (roomName, acknowledge) => {
    // Check if the room exists
    if (!rooms[roomName]) {
      console.log("Room Does not exist");
      return acknowledge({ ok: false, roomName });
    }
    rooms[roomName].removePlayer(socket.id);
    acknowledge({
      ok: true,
      roomName,
    });
  });
}

module.exports = room;
