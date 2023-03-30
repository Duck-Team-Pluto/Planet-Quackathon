import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";
import { ColumnContainer, RowContainer, SinglePlanetImageContainer } from "../../styled-components/Containers";

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
  }, [dispatch]);

  let radiusNum = +planet.radiusInMiles;
  let distanceNum = +planet.distanceInMiles;
  distanceNum = distanceNum.toLocaleString("en-US");
  radiusNum = radiusNum.toLocaleString("en-US");
  return (
    <div key={planet.id}>
    <RowContainer>


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

      <div className="planet-scroll">
        <a
          onClick={() => {
            window.location.href = `/planets/${prev}`;
          }}
        >
          Previous Planet!
        </a>
      </div>
      <div className="planet-next">
        <a
          onClick={() => {
            window.location.href = `/planets/${next}`;
          }}
        >
          Next Planet!
        </a>
      </div>

    </div>
  );
};

export default Planet;
