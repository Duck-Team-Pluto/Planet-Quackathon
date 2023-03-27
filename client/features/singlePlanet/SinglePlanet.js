import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPlanet, fetchPlanetAsync } from "./singlePlanetSlice";
import { SinglePlanetImage } from "../../styled-components/planetdisplays";

const Planet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  const planet = useSelector((state) => state.planet);
  console.log(planet);
  // const { id } = useParams();
  useEffect(() => {
    dispatch(fetchPlanetAsync(id));
  }, [dispatch]);
  return (
    <div key={planet.id}>
      <SinglePlanetImage radius={planet.radiusInMiles}>
        {planet.moons && planet.moons.length ?
        planet.moons.map((moon)=><p>{moon.name}</p>) : null} </SinglePlanetImage>
      <h1>{planet.name}</h1>
      <h2>Radius: {planet.radiusInMiles}</h2>
      <h2>Distance from the Sun: {planet.distanceInMiles}</h2>
      <h2>Core Type: {planet.core}</h2>
      <h3>Fun Facts!!!</h3>
      <h3>{planet.factOne}</h3>
      <h3>{planet.factTwo}</h3>
      <h3>{planet.factThree}</h3>
      <div>
        {planet.moons && planet.moons.length
          ? planet.moons.map((moon) => {
              return (
                <div key={moon.id}>
                  <p>{moon.name}</p>
                  <p>{moon.history}</p>
                  <p>{moon.radiusInMiles}</p>
                </div>
              );
            })
          : "This Planet doesn't have any moons!"}
      </div>
    </div>
  );
};

export default Planet;
