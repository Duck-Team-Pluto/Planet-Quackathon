import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectPlanet, fetchPlanetAsync } from "./singlePlanetSlice";
import {
  Rings,
  SinglePlanetImage,
} from "../../styled-components/planetdisplays";

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
      <SinglePlanetImage radius={planet.radiusInMiles}>
        <Rings radius={planet.radiusInMiles}></Rings>
      </SinglePlanetImage>
      <div className="single-planet">
        <h1>{planet.name}</h1>
        <h2>Radius (mi): {planet.radiusInMiles}</h2>
        <h2>Distance from the Sun (mi): {planet.distanceInMiles}</h2>
        <h2>Core Type: {planet.core}</h2>
        <h2>Fun Facts!!!</h2>
        <div className="fun-facts">
          <h3>{planet.factOne}</h3>
          <h3>{planet.factTwo}</h3>
          <h3>{planet.factThree}</h3>
        </div>
        <div>
          <h3>{planet.name}'s Moons:</h3>
          <table>
            <thead>
              <tr>
                <th align="right">Name</th>
                <th align="right">Origin of Name</th>
                <th align="right">Radius in Miles</th>
              </tr>
            </thead>
          </table>
          {planet.moons && planet.moons.length
            ? planet.moons.map((moon) => {
                return (
                  <div key={moon.id}>
                    <table>
                      <tbody>
                        <tr>
                          <th>{moon.name}</th>
                          <th>{moon.history}</th>
                          <th>{moon.radiusInMiles}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })
            : "This Planet doesn't have any moons!"}
        </div>
      </div>
      <div>
        <Link to={`/planets/${next}`}>Next Planet!</Link>
      </div>
    </div>
  );
};

export default Planet;
