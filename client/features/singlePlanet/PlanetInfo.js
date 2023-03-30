import React from "react";
import { useState } from "react";
import { ColumnContainer } from "../../styled-components/Containers";
const PlanetInfo = (props) => {
  const planet = props.planet;
  let radiusNum = +planet.radiusInMiles;
  let distanceNum = +planet.distanceInMiles;
  let distanceMiles = distanceNum.toLocaleString("en-US");
  let radiusMiles = radiusNum.toLocaleString("en-US");
  let radiusInKm = (radiusNum * 1.609344).toLocaleString("en-US");
  let distanceInKm = (distanceNum * 1.609344).toLocaleString("en-US");
  console.log(planet);
  const [distance, setDistance] = useState(false);

  const handleChange = (e) => {
    setDistance(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <ColumnContainer border={true} className="single-planet-info">
      <label className="switch">
        <input type="checkbox" name="distance" onClick={handleChange} />

        <span className="slider"></span>
      </label>
      {distance ? <p>Switch to miles</p> : <p>Switch to kilometers</p>}
      <h1>{planet.name}</h1>
      {distance ? (
        <>
          <h2>Radius (km): {radiusInKm}</h2>
          <h2>Distance from the Sun (km): {distanceInKm}</h2>
        </>
      ) : (
        <>
          <h2>Radius (mi): {radiusMiles}</h2>
          <h2>Distance from the Sun (mi): {distanceMiles}</h2>
        </>
      )}
      <h2>Planet Type: {planet.planetType}</h2>
      <h2>Fun Facts!!!</h2>
      <div className="fun-facts">
        <h3>{planet.factOne}</h3>
        <h3>{planet.factTwo}</h3>
        <h3>{planet.factThree}</h3>
      </div>
      </ColumnContainer>
  );
};

export default PlanetInfo;
