const router = require("express").Router();
const { Planet, Moon } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const planets = await Planet.findAll();
    res.json(planets);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const planet = await Planet.findByPk(req.params.id, {
      include: Moon,
    });
    if (!planet) res.sendStatus(404);
    else {
      res.send(planet);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
