import React from "react";

const PlanetInfo = (props) => {
  const planet = props.planet;
  let radiusNum = +planet.radiusInMiles;
  let distanceNum = +planet.distanceInMiles;
  distanceNum = distanceNum.toLocaleString("en-US");
  radiusNum = radiusNum.toLocaleString("en-US");
  console.log(planet);
  return (
    <div className="single-planet">
      <h1>{planet.name}</h1>
      <h2>Radius (mi): {radiusNum}</h2>
      <h2>Distance from the Sun (mi): {distanceNum}</h2>
      <h2>Core Type: {planet.core}</h2>
      <h2>Fun Facts!!!</h2>
      <div className="fun-facts">
        <h3>{planet.factOne}</h3>
        <h3>{planet.factTwo}</h3>
        <h3>{planet.factThree}</h3>
      </div>
    </div>
  );
};

export default PlanetInfo;
