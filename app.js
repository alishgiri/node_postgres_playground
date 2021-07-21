const express = require("express");
const socketio = require("socket.io");

const dbConfig = require("./db/db_config");
const { initRoutes } = require("./src/routes");
const { initSocketIO } = require("./src/socket.io/basics");
const { initSocketIoRooms } = require("./src/socket.io/rooms_example");

const app = express();

app.use(express.json());
app.use(express.static("src/static/"));

const { PORT } = process.env;

dbConfig();

initRoutes(app);

const defaultPort = 2021;
const server = app.listen(PORT || defaultPort, () => {
  console.log("Listening on port:", PORT || defaultPort);
});

const io = socketio(server);
initSocketIO(io);
initSocketIoRooms(io);
