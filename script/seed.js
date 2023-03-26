"use strict";

const { db, Planet, Moon } = require("../server/db");

const planets = [
  {
    name: "Mercury",
    radiusInMiles: 1516,
    distanceInMiles: 3.5983125 * 10 ** 7,
    mass: 3.285 * 10 ** 23,
    orbitCirc: 2.23 * 10 ** 8,
    orbitEcc: 0.20563593,
    factOne: "It is the closest planet to the sun.",
    factTwo: "It is the smallest of the non dwarf planets in our solar system.",
    factThree:
      "Due to solar radiation and extreme temperatures, it is very unlikely that life could survive on the planet.",
    core: "Solid",
  },
  {
    name: "Venus",
    radiusInMiles: 3760,
    distanceInMiles: 6.7238251 * 10 ** 7,
    mass: 4.867 * 10 ** 24,
    orbitCirc: 6.799 * 10 ** 8,
    orbitEcc: 0.00677672,
    factOne:
      "It is sometimes called Earth's sister or twin planet as it is almost as large and has a similar composition.",
    factTwo:
      "Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system.",
    factThree:
      "Its thick atmosphere is full of the greenhouse gas carbon dioxide, and it has clouds of sulfuric acid.",
    core: "Solid",
  },
  {
    name: "Earth",
    radiusInMiles: 3958.8,
    distanceInMiles: 9.295605 * 10 ** 7,
    mass: 5.972 * 10 ** 24,
    orbitCirc: 5.84058059 * 10 ** 8,
    orbitEcc: 0.01671123,
    factOne: "The Earth isn't flat",
    factTwo: "Earth rotates at around 1000 miles an hour",
    factThree:
      "The planet's surface is bumpy, and water flow, ice drift and the movement of the tectonic plates beneath Earth's crust all change the pull of gravity over the surface.",
    core: "Solid",
  },
  {
    name: "Mars",
    radiusInMiles: 2106.1,
    distanceInMiles: 1.41637725 * 10 ** 8,
    mass: 6.39 * 10 ** 23,
    orbitCirc: 8.88 * 10 ** 8,
    orbitEcc: 0.0933941,
    factOne: "Mars is named after the Roman god of war.",
    factTwo: "A day on Mars lasts 24 hours and 37 minutes.",
    factThree:
      "Mars is home to Olympus Mons, a dormant volcano and the largest volcano and highest mountain in our solar system. It is 16 miles high and 600 km across the base, making it 3x the height of Mount Everest.",
    core: "Solid",
  },
  {
    name: "Jupiter",
    radiusInMiles: 43441,
    distanceInMiles: 4.83638564 * 10 ** 8,
    mass: 1.89813 * 10 ** 27,
    orbitCirc: 3.037 * 10 ** 9,
    orbitEcc: 0.04838624,
    factOne: "Jupiter is the biggest planet in our solar system.",
    factTwo:
      "It's similar to a star, but it never got big enough to start burning.",
    factThree:
      "It has big storms like the Great Red Spot, which has been going for hundreds of years.",
    core: "Solid",
  },
  {
    name: "Saturn",
    radiusInMiles: 36184,
    distanceInMiles: 8.865 * 10 ** 8,
    mass: 5.683 * 10 ** 26,
    orbitCirc: 5.5659 * 10 ** 9,
    orbitEcc: 0.05386179,
    factOne: "You cannot stand on Saturn.",
    factTwo:
      "Its beautiful rings are not solid. They are made up of bits of ice, dust and rock.",
    factThree: "This planet is named after the Roman god of farming",
    core: "Gas",
  },
  {
    name: "Uranus",
    radiusInMiles: 15759,
    distanceInMiles: 1.7837 * 10 ** 9,
    mass: 8.681 * 10 ** 25,
    orbitCirc: 1.12013 * 10 ** 10,
    orbitEcc: 0.04725744,
    factOne:
      "It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel.",
    factTwo: "Uranus is surrounded by a set of 13 rings.",
    factThree: "Uranus is the only planet that spins on its side.",
    core: "Solid",
  },
  {
    name: "Neptune",
    radiusInMiles: 15299,
    distanceInMiles: 2.7952 * 10 ** 9,
    mass: 1.0241 * 10 ** 26,
    orbitCirc: 1.75623 * 10 ** 10,
    orbitEcc: 0.00859048,
    factOne:
      "Neptune is the only planet in our solar system not visible to the naked eye.",
    factTwo:
      "In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
    factThree:
      "Neptune is an ice giant. Its made up of dense icy materials, mainly water, methane and ammonia, above a small rocky core.",
    core: "Solid",
  },
  {
    name: "Pluto",
    radiusInMiles: 738.38,
    distanceInMiles: 3.6701 * 10 ** 9,
    mass: 1.309 * 10 ** 22,
    orbitCirc: 2.26987 * 10 ** 10,
    orbitEcc: 0.2482,
    factOne:
      "Pluto was considered a planet until 2006 (and it still is to us).",
    factTwo: "A year on Pluto is 248 Earth years.",
    factThree:
      "Pluto is the only place other than Earth in our solar system that has white-peaked mountains, but these white caps arent made of snow. Instead, theyre made of methane frost.",
    core: "Solid",
  },
];

const moons = [
  {
    name: "Luna",
    history:
      "It is named Luna in Latin which is the main adjective for all things moon-related.",
    radiusInMiles: 1079.6,
    planetId: 3,
  },
  {
    name: "Deimos",
    history:
      "It is named after the two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 3.8525,
    planetId: 4,
  },
  {
    name: "Phobos",
    history:
      "It is named after the two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 7.0008,
    planetId: 4,
  },
  {
    name: "Io",
    history:
      "It was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers.",
    radiusInMiles: 1131.9,
    planetId: 5,
  },
  {
    name: "Europa",
    history:
      "Europa is named for a woman who, in Greek mythology, was abducted by the god Zeus – Jupiter in Roman mythology.",
    radiusInMiles: 969.84,
    planetId: 5,
  },
  {
    name: "Ganymede",
    history:
      "Ganymede was named after a beautiful young boy who was carried to Olympus by Zeus (the Greek equivalent of the Roman god Jupiter) disguised as an eagle and became the cupbearer of the Olympian gods.",
    radiusInMiles: 1636.8,
    planetId: 5,
  },
  {
    name: "Callisto",
    history:
      "Callisto is named for a woman turned into a bear by Zeus in Greek mythology.",
    radiusInMiles: 1497.7,
    planetId: 5,
  },
  {
    name: "Naiad",
    history:
      "The Naiads, female spirits (nymphs) associated with bodies of freshwater.",
    radiusInMiles: 20.505,
    planetId: 8,
  },
  {
    name: "Thalassa",
    history: "The sea goddess Thalassa.",
    radiusInMiles: 25.476,
    planetId: 8,
  },
  {
    name: "Despina",
    history: "The nymph Despoina.",
    radiusInMiles: 46.603,
    planetId: 8,
  },
  {
    name: "Galtea",
    history: "Galatea, one of the Nereids.",
    radiusInMiles: 54.308,
    planetId: 8,
  },
  {
    name: "Larissa",
    history: "Larissa, nymph and lover of Poseidon.",
    radiusInMiles: 60.273,
    planetId: 8,
  },
  {
    name: "Hippocamp",
    history: "Hippocampus, a mythical creature associated with Poseidon.",
    radiusInMiles: 5.5923,
    planetId: 8,
  },
  {
    name: "Proteus",
    history: "The shapeshifting sea god Proteus",
    radiusInMiles: 130.49,
    planetId: 8,
  },
  {
    name: "Triton",
    history: "The sea god Triton.",
    radiusInMiles: 840.96,
    planetId: 8,
  },
  {
    name: "Nereid",
    history: "The Nereids, a group of sea nymphs.",
    radiusInMiles: 105.63,
    planetId: 8,
  },
  {
    name: "Halimede",
    history: "Halimede, one of the Nereids.",
    radiusInMiles: 19.263,
    planetId: 8,
  },
  {
    name: "Sao",
    history: "Sao, one of the Nereids.",
    radiusInMiles: 13.67,
    planetId: 8,
  },
  {
    name: "Laomedeia",
    history: "Laomedeia, one of the Nereids.",
    radiusInMiles: 13.049,
    planetId: 8,
  },
  {
    name: "Psamathe",
    history: "Psamathe, one of the Nereids.",
    radiusInMiles: 11.806,
    planetId: 8,
  },
  {
    name: "Neso",
    history: "Neso, one of the Nereids.",
    radiusInMiles: 18.641,
    planetId: 8,
  },
  {
    name: "Charon",
    history: "Charon, ferryman of the underworld in Greek mythology.",
    radiusInMiles: 376.55,
    planetId: 9,
  },
  {
    name: "Nix",
    history:
      "Egyptian spelling of Nyx, goddess of the night in Greek mythology.",
    radiusInMiles: 35,
    planetId: 9,
  },
  {
    name: "Styx",
    history: "The mythical river Styx and its eponymous goddess.",
    radiusInMiles: 8,
    planetId: 9,
  },
  {
    name: "Kerberos",
    history:
      "Greek spelling of Cerberus, the many-headed dog who guards the Greek underworld.",
    radiusInMiles: 5.6,
    planetId: 9,
  },
  {
    name: "Hydra",
    history:
      "The Hydra, the many-headed serpent who guards the Greek underworld.",
    radiusInMiles: 35,
    planetId: 9,
  },
  {
    name: "Enceladus",
    history: "A giant in Greek mythology, son of Gaia and Uranus.",
    radiusInMiles: 156,
    planetId: 6,
  },
  {
    name: "Titan",
    history: "Titans were the old gods in Greek mythology.",
    radiusInMiles: 1600,
    planetId: 6,
  },
  {
    name: "Dione",
    history: "A Greek goddess, potentially the mother of Aphrodite.",
    radiusInMiles: 349,
    planetId: 6,
  },
  {
    name: "Prometheus",
    history:
      "A Greek titan, known for stealing fire and giving it to humanity.",
    radiusInMiles: 26,
    planetId: 6,
  },
  {
    name: "Oberon",
    history:
      "The king of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 473,
    planetId: 7,
  },
  {
    name: "Titania",
    history:
      "The queen of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    planetId: 7,
  },
  {
    name: "Ariel",
    history: 'A spirit in Shakespeare\'s "The Tempest".',
    radiusInMiles: 489,
    planetId: 7,
  },
  {
    name: "Puck",
    history: "A sprite in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    planetId: 7,
  },
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const planet = await Promise.all(
    planets.map((planet) => {
      return Planet.create(planet);
    })
  );

  const moon = await Promise.all(
    moons.map((moon) => {
      return Moon.create(moon);
    })
  );
  // Creating Users
}
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
