const express = require("express");
const app = express();
const parser = require("body-parser");

const poke = require('./db/routes/pokeroutes');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/api/poke", poke);

app.listen(4000, () => console.log("listening on port 4000"));