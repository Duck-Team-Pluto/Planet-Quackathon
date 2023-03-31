import React from "react";
import { Link } from "react-router-dom";
import SpaceLink from "../../styled-components/SpaceLink";
import { SimplePlanetImage } from "../../styled-components/PlanetDisplays";
import {
  RowContainer,
  ColumnContainer,
} from "../../styled-components/Containers";

const PlanetList = (props) => {
  const planets = props.planets;
  return (
    <>
      {planets.map((planet) => {
        return (
          <ColumnContainer
            className="planet-item"
            border={false}
            key={planet.id}>
            <Link to={`/planets/${planet.id}`}>
              <SimplePlanetImage
                margin={-37.5}
                radius={planet.radiusInMiles}
                colorOne={planet.colorOne}
                colorTwo={planet.colorTwo}></SimplePlanetImage>
            </Link>
            <SpaceLink to={`/planets/${planet.id}`} text={planet.name} />
          </ColumnContainer>
        );
      })}
      </>
  );
};

export default PlanetList;
