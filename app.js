const express = require("express");

const User = require("./db/models/user");
const dbConfig = require("./db/db_config");

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.send(user);
  } catch (e) {
    res.status(400).send({ message: "Something went wrong!", e });
  }
});

dbConfig();

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
