const express = required("express");

const dbConfig = require("./db/db_config");

const app = express();
app.use(express.json());

dbConfig();