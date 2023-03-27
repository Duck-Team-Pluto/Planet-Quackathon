const router = require("express").Router();
const { Planet, Moon } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const moons = await Moon.findAll();
    res.json(moons);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const moon = await Moon.findByPk(req.params.id, {
      include: Planet,
    });
    if (!moon) res.sendStatus(404);
    else {
      res.send(moon);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
