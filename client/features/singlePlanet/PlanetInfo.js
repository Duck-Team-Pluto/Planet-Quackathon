import React, { useEffect, useState } from "react";
import { ColumnContainer } from "../../styled-components/Containers";


const PlanetInfo = (props) => {
  const planet = props.planet;
  const units = props.units;

  return (
    <>
      <h2>Fun Facts!!!</h2>
      <div className="fun-facts">
        <h3>{planet.factOne}</h3>
        <h3>{planet.factTwo}</h3>
        <h3>{planet.factThree}</h3>
      </div>
      </>
  );
};

export default PlanetInfo;
