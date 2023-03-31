import React from "react";
import { ColumnContainer } from "../../styled-components/Containers";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";

const SinglePlanetImageDisplay = (props) => {
const planet = props.planet

  return (
    <ColumnContainer width="30vw" margin="-15vh 0 10vh 0">

       <SinglePlanetImage
        radius={planet.radiusInMiles}
        colorOne={planet.colorOne}
        colorTwo={planet.colorTwo}
        />

    </ColumnContainer>
  )
}

export default SinglePlanetImageDisplay
