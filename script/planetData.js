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
    factOne: "The Earth isn't flat!",
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
    factThree: "This planet is named after the Roman god of farming.",
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

module.exports = planets;
