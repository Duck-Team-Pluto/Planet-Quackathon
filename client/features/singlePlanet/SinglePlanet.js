import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";
import FunFacts from "./FunFacts";
import SinglePlanetImageDisplay from "./SinglePlanetImageDisplay";
import {
  ColumnContainer,
  RowContainer,
} from "../../styled-components/Containers";
import SpaceLink from "../../styled-components/SpaceLink";

const Planet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const planet = useSelector((state) => state.planet);
  console.log(planet)

  const SinglePlanetDisplays = {
    funFacts: <FunFacts planet={planet} units={units} />,
    moonInfo: <Moons planet={planet} />,
  };

  let next = +id + 1;
  let prev = +id - 1;
  if (next > 9) next = 1;
  if (prev < 1) prev = 9;



  const [units, setUnits] = useState("miles");
  const [displayedComponent, setDisplayedComponent] = useState(
    SinglePlanetDisplays.funFacts
  );
  const [radius, setRadius] = useState(planet.radiusInMiles);
  const [distance, setDistance] = useState(planet.distanceInMiles);
  const toKilometers = 1.609344;



  const handleUnitChange = (e) => {
    setUnits(e.target.checked ? "kilometers" : "miles");
    console.log(e.target.checked);
  };

  const handleDisplayedComponentChange = (e) => {
    setDisplayedComponent(SinglePlanetDisplays[e.target.value]);
  };

  useEffect(() => {
    dispatch(fetchPlanetAsync(id));
    setRadius(
      units === "miles"
        ? (+planet.radiusInMiles).toLocaleString("en-US")
        : (+planet.radiusInMiles * toKilometers).toLocaleString("en-US")
    );
    setDistance(
      units === "miles"
        ? (+planet.distanceInMiles).toLocaleString("en-US")
        : (+planet.distanceInMiles * toKilometers).toLocaleString("en-US")
    )
    setDisplayedComponent(SinglePlanetDisplays.funFacts);
  }, [dispatch, id, units, planet.name]);

  return (
    <div key={planet.id}>
      <RowContainer className="previous-and-next-buttons">
        <SpaceLink to={`/planets/${prev}`} text="Previous Planet!" />
        <ColumnContainer className="units-toggle" border={false}>
          <label className="switch">
            <input type="checkbox" name="units" onClick={handleUnitChange} />
            <span className="slider"></span>
          </label>
          Units: {units === "miles" ? "Miles" : "Km"}
        </ColumnContainer>
        <SpaceLink to={`/planets/${next}`} text="Next Planet!" />
      </RowContainer>
      <RowContainer className="single-planet-info">
        <PlanetInfo planet={planet} units={units} radius={radius} distance={distance} />
      </RowContainer>
      <ColumnContainer className="single-planet-main-container">
        <RowContainer className="display-options">
          <input
            type="radio"
            id="fun-facts"
            name="displayedComponent"
            value="funFacts"
            onClick={handleDisplayedComponentChange}
          />
          <label htmlFor="fun-facts">Fun Facts</label>
          <input
            type="radio"
            id="moon-info"
            name="displayedComponent"
            value="moonInfo"
            onClick={handleDisplayedComponentChange}
          />
          <label htmlFor="moon-info">Moon Info</label>
        </RowContainer>
        <RowContainer>
          <ColumnContainer className="single-planet-info-display-container">
            {planet && planet.name ? displayedComponent : null}
          </ColumnContainer>
          <ColumnContainer>
            <SinglePlanetImageDisplay planet={planet} />
          </ColumnContainer>
        </RowContainer>
      </ColumnContainer>
    </div>
  );
};

export default Planet;
