const express = require("express");
const poke = require("../controller/pokecontroller.js")
const router = express.Router();

router.get("/", poke.index);
router.get("/:name", poke.pokeName);
router.put("/:name", poke.updateName);
router.delete('/:name', poke.delete)
router.put('/:name', poke.create)

module.exports = router;