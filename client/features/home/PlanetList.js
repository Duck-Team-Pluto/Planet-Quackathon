import React from "react";
import { Link } from "react-router-dom";
import SpaceLink from "../../styled-components/SpaceLink";
import { SimplePlanetImage } from "../../styled-components/PlanetDisplays";
import { PlanetListContainer, PlanetListItem } from "../../styled-components/PlanetListContainer";


const PlanetList = (props) => {
  const planets = props.planets;
  return (
    <PlanetListContainer>
{planets.map((planet)=> {

return(
  <PlanetListItem key={planet.id}>
    <Link to={`/planets/${planet.id}`}><SimplePlanetImage margin={-37.5} radius={planet.radiusInMiles}></SimplePlanetImage></Link><SpaceLink to={`/planets/${planet.id}`} text={planet.name}/></PlanetListItem>
    )})}
    </PlanetListContainer>
  );
};

export default PlanetList;
