const express = require("express");

const dbConfig = require("./db/db_config");
const { initRoutes } = require("./src/routes");
const initSocketIO = require("./src/socket.io/config");

const app = express();

app.use(express.json());
app.use(express.static("static"));

const { PORT } = process.env;

dbConfig();

initRoutes(app);

const defaultPort = 2021;
const server = app.listen(PORT || defaultPort, () => {
  console.log("Listening on port:", PORT || defaultPort);
});

initSocketIO(server);
