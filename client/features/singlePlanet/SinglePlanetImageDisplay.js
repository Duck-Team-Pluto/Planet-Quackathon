import React from "react";
import { SinglePlanetImageContainer } from "../../styled-components/Containers";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";

const SinglePlanetImageDisplay = (props) => {
const planet = props.planet

  return (

      <SinglePlanetImageContainer>
            <SinglePlanetImage
              radius={planet.radiusInMiles}
              colorOne={planet.colorOne}
              colorTwo={planet.colorTwo}></SinglePlanetImage>
          </SinglePlanetImageContainer>

  )
}

export default SinglePlanetImageDisplay
