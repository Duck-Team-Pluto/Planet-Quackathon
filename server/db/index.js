//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Moon = require("./models/Moon");
const Planet = require("./models/Planet");
//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Planet,
    Moon,
  },
};
