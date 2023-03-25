//this is the access point for all things database related!

const db = require("./db");

const Moon = require("./models/Moon");
const Planet = require("./models/Planet");
//associations could go here!
Moon.belongsTo(Planet);
Planet.hasMany(Moon);

module.exports = {
  db,
  Planet,
  Moon,
};
