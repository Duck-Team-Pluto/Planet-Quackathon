const Sequelize = require("sequelize");
const db = require("../db");

const Planet = db.define("planet", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  radiusInMiles: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  distanceInMiles: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  mass: {
    //kg
    type: Sequelize.DECIMAL,
    // allowNull: false,
  },
  orbitCirc: {
    //miles
    type: Sequelize.DECIMAL,
    //allowNull: false,
  },
  orbitEcc: {
    //miles
    type: Sequelize.DECIMAL,
    // allowNull: false,
  },
  factOne: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  factTwo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  factThree: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  core: {
    type: Sequelize.ENUM,
    values: ["Solid", "Gas"],
  },
});

module.exports = Planet;
