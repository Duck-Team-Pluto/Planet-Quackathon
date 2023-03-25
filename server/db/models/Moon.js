const Sequelize = require("sequelize");
const db = require("../db");

const Moon = db.define("moon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  history: {
    type: Sequelize.TEXT,
  },
  radiusInMiles: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Moon;
