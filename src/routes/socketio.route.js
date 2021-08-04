const path = require("path");
const router = require("express").Router();

const staticPath = path.join(__dirname, "..", "static");

router.get("/", (req, res) => res.sendFile(staticPath + "/index.html"));

router.get("/rooms", (req, res) =>
  res.sendFile(staticPath + "/rooms_socket.html")
);

module.exports = router;
