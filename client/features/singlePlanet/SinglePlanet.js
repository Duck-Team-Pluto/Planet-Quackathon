import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectPlanet, fetchPlanetAsync } from "./singlePlanetSlice";
import {
  Rings,
  SinglePlanetImage,
} from "../../styled-components/planetdisplays";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";

const Planet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const planet = useSelector((state) => state.planet);
  const next = +id + 1;
  console.log(next);
  useEffect(() => {
    dispatch(fetchPlanetAsync(id));
  }, [dispatch]);
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

      <Link to={`/planets/${next}`}>Next Planet!</Link>

        </div>
  );
};

export default Planet;
