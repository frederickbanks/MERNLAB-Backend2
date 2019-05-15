poke = require("../models/pokemodel.js");

module.exports = {
  index: (req, res) => {
    poke.find({}).then(results => {
      res.json(results);
    });
  },

  pokeName: (req, res) => {
    let name = req.params.name;
    poke.findOne({ name: name }).then(results => {
      res.json(results);
    });
  },

  create: (req, res) => {
    poke
      .create({
        name: req.body.name,
        url: req.body.url
      })
      .then(() => res.redirect("/poke"));
  },

  updateName: (req, res) => {
    let name = req.params.name;
    poke.findOneAndUpdate({ name: name }, req.body).then(results => {
      res.json(results);
    });
  },

  delete: (req, res) => {
    let name = req.params.name;
    poke.findByIdAndDelete({ name: name }, req.body).then(results => {
      res.json(results);
    });
  }
};
