const mongoose = require("../../connection.js");

const pokeSchema = new mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('pokeSchema', pokeSchema)