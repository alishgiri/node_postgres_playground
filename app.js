const express = require("express");

const dbConfig = require("./db/db_config");
const { initRoutes } = require("./src/routes");

const app = express();
app.use(express.json());

const { PORT } = process.env;

dbConfig();

initRoutes(app);

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
