function chat(socket, io) {
  socket.on("chat/new-message", (data) => {
    // console.log(`in chat listener, data is:${JSON.stringify(data)}`);
    io.emit("chat/new-message", data);
  });
}
module.exports = chat;
