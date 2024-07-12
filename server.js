// "use strict";
// const connection = require("./backend/listeners/connection.js");
// const room = require("./backend/listeners/room.js");
// const game = require("./backend/listeners/game.js");
// const gameData = require("./backend/listeners/gameData.js");
// const setRoomProps = require("./backend/listeners/roomProps.js");
// const chat = require("./backend/listeners/chat.js");
// const { createServer } = require("node:http");
// const next = require("next");
// const { Server } = require("socket.io");
// const dev = process.env.NODE_ENV !== "production";
// const hostname = "https://subtle-queijadas-5280a0.netlify.app/";
// const port = 3000;
// const app = next({ dev, hostname });
// const handler = app.getRequestHandler();
// app.prepare().then(() => {
//   const httpServer = createServer(handler);

//   const io = new Server(httpServer);

//   io.on("connection", (socket) => {
//     // ...
//     connection(socket, io);
//     chat(socket, io);
//     room(socket, io);
//     game(socket, io);
//     gameData(socket, io);
//     setRoomProps(socket, io);
//   });

//   httpServer
//     .once("error", (err) => {
//       console.error(err);
//       process.exit(1);
//     })
//     .listen(port, () => {
//       console.log(`> Ready on http://${hostname}:${port}`);
//     });
// });
