function setRoomProps(socket, io) {
  socket.on("roomProperties", (data) => {
    console.log(`in roomProperties listener data:${JSON.stringify(data)}`);
    io.emit("recive_roomData", data);
  });
}
module.exports = setRoomProps;
