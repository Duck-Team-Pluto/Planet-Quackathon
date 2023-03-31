/*
Mercury: rgba(229, 228, 226, 1), rgba(192, 192, 192, 1)
Venus: rgba(242, 133, 0, 1), rgba(181, 105, 23, 1)
Earth:rgba(0, 112, 187, 1), rgba(30, 77, 43, 1) <== this is terrible, somebody needs to fix it
Mars:rgba(137, 63, 69, 1), rgba(128, 24, 24, 1)
Jupiter:rgba(193, 154, 107, 1), rgba(191, 87, 0, 1)
Saturn:rgba(195, 176, 145, 1), rgba(218, 200, 174, 1)
Uranus:rgba(15, 82, 186, 1), rgba(17, 100, 180, 1)
Neptune:rgba(0, 20, 168, 1), rgba(0, 35, 135, 1)
Pluto:rgba(219, 215, 210, 1), rgba(152, 129, 123, 1)
*/

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
    planetType: "Solid",
    id: 1,
    colorOne: [229, 228, 261],
    colorTwo: [192, 192, 192],
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
    planetType: "Solid",
    id: 2,
    colorOne: [242, 133, 0],
    colorTwo: [181, 105, 23],
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
    planetType: "Solid",
    id: 3,
    colorOne: [0, 112, 187],
    colorTwo: [30, 77, 43],
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
    planetType: "Solid",
    id: 4,
    colorOne: [137, 63, 69],
    colorTwo: [128, 24, 24],
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
    planetType: "Gas Giant",
    id: 5,
    colorOne: [193, 154, 107],
    colorTwo: [191, 87, 0],
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
    planetType: "Gas Giant",
    id: 6,
    colorOne: [195, 176, 145],
    colorTwo: [218, 200, 174],
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
    planetType: "Ice Giant",
    id: 7,
    colorOne: [15, 82, 186],
    colorTwo: [17, 100, 180],
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
      "Neptune is an ice giant. Its made up of dense icy materials, mainly water, methane and ammonia, above a small rocky planetType.",
    planetType: "Ice Giant",
    id: 8,
    colorOne: [0, 20, 168],
    colorTwo: [0, 35, 135],
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
    planetType: "Dwarf",
    id: 9,
    colorOne: [219, 215, 210],
    colorTwo: [152, 129, 123],
  },
];

module.exports = planets;
