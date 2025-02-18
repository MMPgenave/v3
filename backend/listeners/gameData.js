function gameData(socket, io, rooms = io.sockets.adapter.rooms) {
  socket.on("gameData/bet-and-host", (data) => {
    // console.log(`in listenerrrr  hostId :${data.hostId}`);
    // console.log(`in listenerrrr  username  :${data.hostUserName}`);
    // console.log(`in listenerr bet:${data.bet}`);
    io.emit("gameData/bet-and-host", data);
  });
}
module.exports = gameData;
