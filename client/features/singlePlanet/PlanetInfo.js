import React, { useEffect, useState } from "react";
import { ColumnContainer } from "../../styled-components/Containers";
const PlanetInfo = (props) => {
  const planet = props.planet;
  const units = props.units;

  const [radius, setRadius] = useState(+planet.radiusInMiles)
  const[distance, setDistance] = useState(+planet.distanceInMiles)
  const toKilometers = 1.61;
  const displayNum = (num) => {
    return num.toLocaleString("en-us")
  }

  useEffect(()=>{
    setRadius(units==='miles' ? +planet.radiusInMiles : (+planet.radiusInMiles)*toKilometers)
    setDistance(units==='miles' ? +planet.distanceInMiles : (+planet.distanceInMiles)*toKilometers)
  }, [units])

  return (
    <ColumnContainer border={true} className="single-planet-info">

      <h1>{planet.name}</h1>
      <h2>Radius {units==='miles' ? '(Miles)' : '(Km)'} : {displayNum(radius)}</h2>
      <h2>Distance from the Sun {units==='miles' ? '(Miles)' : '(Km)'}: {displayNum(distance)}</h2>
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
