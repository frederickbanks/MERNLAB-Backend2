const pokeModel = require("./models/pokemodel.js");

const pokeJson = require("../data.json");

pokeModel.remove({});
pokeModel.collection
  .insert(pokeJson)
  .then(pokeJson => {
    console.log(pokeJson);
  })
  .catch(err => {
    console.log(err);
  });
