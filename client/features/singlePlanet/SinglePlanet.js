import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";
import { ColumnContainer, RowContainer, SinglePlanetImageContainer } from "../../styled-components/Containers";
import SpaceLink from "../../styled-components/SpaceLink";

const Planet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const planet = useSelector((state) => state.planet);
  let next = +id + 1;
  let prev = +id - 1;
  if (next > 9) next = 1;
  if (prev < 1) prev = 9;

  useEffect(() => {
    dispatch(fetchPlanetAsync(id));
  }, [dispatch, id]);

  let radiusNum = +planet.radiusInMiles;
  let distanceNum = +planet.distanceInMiles;
  distanceNum = distanceNum.toLocaleString("en-US");
  radiusNum = radiusNum.toLocaleString("en-US");
  return (
    <div key={planet.id}>
    <RowContainer className="previous-and-next-buttons">
      <SpaceLink to={`/planets/${prev}`} text='Previous Planet!'/>
      <SpaceLink to={`/planets/${next}`} text='Next Planet!'/>
    </RowContainer>
    <RowContainer className="single-planet-main-container">


      {
        planet && planet.name ?
        <PlanetInfo planet={planet}></PlanetInfo>
        : null
      }
      <ColumnContainer>
        <SinglePlanetImageContainer>
          <SinglePlanetImage radius={planet.radiusInMiles}></SinglePlanetImage>
        </SinglePlanetImageContainer>
      {
        planet.moons && planet.moons.length
        ? <Moons planetName={planet.name} moons={planet.moons}></Moons>
        : null
      }
      </ColumnContainer>
</RowContainer>



    </div>
  );
};

export default Planet;
