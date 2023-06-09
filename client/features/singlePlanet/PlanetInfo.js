import React from "react";
import { ColumnContainer } from "../../styled-components/Containers";



const PlanetInfo = (props) => {
 const { radius, distance, units, planet } = props;

 console.log('from planet info: ', units)

  return (

      <ColumnContainer width='30vw' margin="0 0 0 2vw" align='left'>
        <h1>{planet.name}</h1>
        <h2>
          Radius {units === "miles" ? "(Miles)" : "(Km)"} {radius}
        </h2>
        <h2>
          Distance from the Sun {units === "miles" ? "(Miles)" : "(Km)"}{" "}
          {distance}
        </h2>
        <h2>Planet Type: {planet.planetType}</h2>
      </ColumnContainer>

  );
};

export default PlanetInfo;
