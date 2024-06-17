function sethostId(socket, io, rooms = io.sockets.adapter.rooms) {
  socket.on("hostId", (hostId) => {
    console.log(`in listenerrrr maedeh for hostId, the hostId is :${hostId.hostId}`);
    console.log(`in listenerrrr maedeh for hostId, the bet is :${hostId.bet}`);

    io.emit("recive_hostId", hostId);
  });
}
module.exports = sethostId;
