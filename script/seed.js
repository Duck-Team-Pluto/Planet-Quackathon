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
    history: "Luna in Latin is the main adjective for all things moon-related.",
    radiusInMiles: 1079.6,
    distanceInMiles: 243036,
    planetId: 3,
  },
  {
    name: "Deimos",
    history:
      "One of two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 3.8525,
    distanceInMiles: 14576,
    planetId: 4,
  },
  {
    name: "Phobos",
    history:
      "One of two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 7.0008,
    distanceInMiles: 3700,
    planetId: 4,
  },
  {
    name: "Io",
    history: "A priestess of Hera who became one of Zeus's lovers.",
    radiusInMiles: 1131.9,
    distanceInMiles: 261220,
    planetId: 5,
  },
  {
    name: "Europa",
    history: "The woman who was abducted by the Greek god Zeus.",
    radiusInMiles: 969.84,
    distanceInMiles: 417002,
    planetId: 5,
  },
  {
    name: "Ganymede",
    history:
      "A beautiful young boy who was carried to Olympus by Zeus who became the cupbearer of the Olympian gods.",
    radiusInMiles: 1636.8,
    distanceInMiles: 665100,
    planetId: 5,
  },
  {
    name: "Callisto",
    history: "A woman turned into a bear by Zeus in Greek mythology.",
    radiusInMiles: 1497.7,
    distanceInMiles: 1169856,
    planetId: 5,
  },
  {
    name: "Naiad",
    history: "Female spirits (nymphs) associated with bodies of freshwater.",
    radiusInMiles: 20.505,
    distanceInMiles: 29967,
    planetId: 8,
  },
  {
    name: "Thalassa",
    history: "The sea goddess.",
    radiusInMiles: 25.476,
    distanceInMiles: 31115,
    planetId: 8,
  },
  {
    name: "Despina",
    history: "A nymph.",
    radiusInMiles: 46.603,
    distanceInMiles: 32638,
    planetId: 8,
  },
  {
    name: "Galatea",
    history: "One of the Nereids.",
    radiusInMiles: 54.308,
    distanceInMiles: 38496,
    planetId: 8,
  },
  {
    name: "Larissa",
    history: "Nymph and lover of Poseidon.",
    radiusInMiles: 60.273,
    distanceInMiles: 45701,
    planetId: 8,
  },
  {
    name: "Hippocamp",
    history:
      "Named for hippocampus, a mythical creature associated with Poseidon.",
    radiusInMiles: 5.5923,
    distanceInMiles: 65420,
    planetId: 8,
  },
  {
    name: "Proteus",
    history: "The shapeshifting sea god.",
    radiusInMiles: 130.49,
    distanceInMiles: 73102,
    planetId: 8,
  },
  {
    name: "Triton",
    history: "The sea god, son of Poseidon.",
    radiusInMiles: 840.96,
    distanceInMiles: 220437,
    planetId: 8,
  },
  {
    name: "Nereid",
    history: "A group of ea nymphs.",
    radiusInMiles: 105.63,
    distanceInMiles: 3426128,
    planetId: 8,
  },
  {
    name: "Halimede",
    history: "One of the Nereids.",
    radiusInMiles: 19.263,
    distanceInMiles: 10321597,
    planetId: 8,
  },
  {
    name: "Sao",
    history: "One of the Nereids.",
    radiusInMiles: 13.67,
    distanceInMiles: 13811839,
    planetId: 8,
  },
  {
    name: "Laomedeia",
    history: "One of the Nereids.",
    radiusInMiles: 13.049,
    distanceInMiles: 14643855,
    planetId: 8,
  },
  {
    name: "Psamathe",
    history: "One of the Nereids.",
    radiusInMiles: 11.806,
    distanceInMiles: 29885469,
    planetId: 8,
  },
  {
    name: "Neso",
    history: "One of the Nereids.",
    radiusInMiles: 18.641,
    distanceInMiles: 30624279,
    planetId: 8,
  },
  {
    name: "Charon",
    history: "Ferryman of the underworld in Greek mythology.",
    radiusInMiles: 376.55,
    distanceInMiles: 10896,
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
    history: "One of the rivers of the underworld in the Greek underworld.",
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
    history: "The many-headed serpent who guards the Greek underworld.",
    radiusInMiles: 35,
    planetId: 9,
  },
  {
    name: "Enceladus",
    history: "A giant in Greek mythology, son of Gaia and Uranus.",
    radiusInMiles: 156,
    distanceInMiles: 147909,
    planetId: 6,
  },
  {
    name: "Titan",
    history: "The old gods in Greek mythology.",
    radiusInMiles: 1600,
    distanceInMiles: 759000,
    planetId: 6,
  },
  {
    name: "Dione",
    history: "A Greek goddess, potentially the mother of Aphrodite.",
    radiusInMiles: 349,
    distanceInMiles: 234515,
    planetId: 6,
  },
  {
    name: "Prometheus",
    history:
      "A Greek titan, known for stealing fire and giving it to humanity.",
    radiusInMiles: 26,
    distanceInMiles: 86607,
    planetId: 6,
  },
  {
    name: "Oberon",
    history:
      "The king of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 473,
    distanceInMiles: 362570,
    planetId: 7,
  },
  {
    name: "Titania",
    history:
      "The queen of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    distanceInMiles: 271104,
    planetId: 7,
  },
  {
    name: "Ariel",
    history: 'A spirit in Shakespeare\'s "The Tempest".',
    radiusInMiles: 489,
    distanceInMiles: 118620,
    planetId: 7,
  },
  {
    name: "Puck",
    history: "A sprite in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    distanceInMiles: 53438,
    planetId: 7,
  },
  {
    name: "Adrastea",
    history: "The Cretian nymph who took care of Zeus",
    radiusInMiles: 5.0952,
    distanceInMiles: 80156,
    planetId: 5,
  },
  {
    name: "Aitne",
    history: "A Sicillian nymph said to have been with the Roman god Jupiter",
    radiusInMiles: 0.621,
    distanceInMiles: 14415811,
    planetId: 5,
  },
  {
    name: "Amalthea",
    history: "A naiad who nursed the newborn Jupiter",
    radiusInMiles: 51.88,
    distanceInMiles: 112716,
    planetId: 5,
  },
  {
    name: "Ananke",
    history: "The mother of Adrastea",
    radiusInMiles: 8.6,
    distanceInMiles: 13200000,
    planetId: 5,
  },
  {
    name: "Aoede",
    history: 'One of the Muses. Aoede means "song".',
    radiusInMiles: 1.24,
    distanceInMiles: 14900000,
    planetId: 5,
  },
  {
    name: "Arche",
    history: 'One of the Muses. Arche means "beginning".',
    radiusInMiles: 1,
    distanceInMiles: 14500000,
    planetId: 5,
  },
  {
    name: "Autonoe",
    history: "A mother of the Graces",
    radiusInMiles: 1.2,
    distanceInMiles: 14900000,
    planetId: 5,
  },
  {
    name: "Callirrhoe",
    history: "The daughter of the River god",
    radiusInMiles: 2.7,
    distanceInMiles: 15000000,
    planetId: 5,
  },
  {
    name: "Carme",
    history: "The mother of Britomartis.",
    radiusInMiles: 14,
    distanceInMiles: 14500000,
    planetId: 5,
  },
  {
    name: "Carpo",
    history: "A goddess the seasons.",
    radiusInMiles: 1.9,
    distanceInMiles: 10500000,
    planetId: 5,
  },
  {
    name: "Chaldene",
    history: "The mother of Solymos.",
    radiusInMiles: 1,
    distanceInMiles: 14300000,
    planetId: 5,
  },
  {
    name: "Cyllene",
    history: "A nymph, daughter of Zeus.",
    radiusInMiles: 0.62,
    distanceInMiles: 14800000,
    planetId: 5,
  },
  {
    name: "Dia",
    history: "The daughter of the seashore",
    radiusInMiles: 1.2,
    distanceInMiles: 7801315,
    planetId: 5,
  },
  {
    name: "Eirene",
    history: "The goddess of peace, daughter of Zeus",
    radiusInMiles: 1.2,
    distanceInMiles: 15000000,
    planetId: 5,
  },
  {
    name: "Elara",
    history: "One of the lovers of Zeus",
    radiusInMiles: 26.7,
    distanceInMiles: 7300000,
    planetId: 5,
  },
  {
    name: "Erinome",
    history:
      "A young woman who fell in love with Jupiter, the Roman equivalent of Zeus.",
    radiusInMiles: 1,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Ersa",
    history: "Daughter of Zeus",
    radiusInMiles: 0.93,
    distanceInMiles: 7084000,
    planetId: 5,
  },
  {
    name: "Euanthe",
    history: "A mother of the Graces.",
    radiusInMiles: 1,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Eukelade",
    history: 'One of the Muses. Eupheme means "well sounding"',
    radiusInMiles: 1.2,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Eupheme",
    history: "The spirit of praise and good omen.",
    radiusInMiles: 1,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Euporie",
    history: "A goddess of the seasons",
    radiusInMiles: 0.6,
    distanceInMiles: 11900000,
    planetId: 5,
  },
  {
    name: "Eurydome",
    history: "A mother of the Graces",
    radiusInMiles: 0.9,
    distanceInMiles: 14300000,
    planetId: 5,
  },
  {
    name: "Harpalyke",
    history: "A woman who was transformed into a night bird.",
    radiusInMiles: 1.3,
    distanceInMiles: 13100000,
    planetId: 5,
  },
  // {
  //   name: "Hegemone",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Helike",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Hermippe",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Herse",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Himalia",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Iocaste",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Isonoe",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Kale",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Kallichore",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Kalyke",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Kore",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Leda",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Lysithea",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Megaclite",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Metis",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Mneme",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Orthosie",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Pandia",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Pasiphae",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Pasithee",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Philophrosyne",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Praxidike",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Sinope",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Sponde",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Taygete",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Thebe",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Thelxinoe",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Themisto",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Thyone",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
  // {
  //   name: "Valetudo",
  //   history: "",
  //   radiusInMiles: 0,
  //   distanceInMiles: 0,
  //   planetId: 0,
  // },
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
