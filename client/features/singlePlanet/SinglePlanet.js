import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";

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
      <SinglePlanetImage radius={planet.radiusInMiles}></SinglePlanetImage>
      {
        planet && planet.name ?
        <PlanetInfo planet={planet}></PlanetInfo>
        : null
      }
      {
        planet.moons && planet.moons.length
        ? <Moons planetName={planet.name} moons={planet.moons}></Moons>
        : "This planet has no moons!"
      }


      <div className="planet-scroll">

        <a
          onClick={() => {
            window.location.href = `/planets/${prev}`;
          }}>
          Previous Planet!
        </a>
        <a
          onClick={() => {
            window.location.href = `/planets/${next}`;
          }}>
          Next Planet!
        </a>
      </div>
    </div>

  );
};

export default Planet;
