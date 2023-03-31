import React from "react";



const PlanetInfo = (props) => {
 const { radius, distance, units, planet } = props;

  return (
    <>

    <h1>{planet.name}</h1>
        <h2>
          Radius {units === "miles" ? "(Miles)" : "(Km)"} {radius}
        </h2>
        <h2>
          Distance from the Sun {units === "miles" ? "(Miles)" : "(Km)"}{" "}
          {distance}
        </h2>
        <h2>Planet Type: {planet.planetType}</h2>

      </>
  );
};

export default PlanetInfo;
