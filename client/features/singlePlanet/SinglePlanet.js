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
  const [units, setUnits] = useState("miles");



  let next = +id + 1;
  let prev = +id - 1;
  if (next > 9) next = 1;
  if (prev < 1) prev = 9;

  const [displayedComponent, setDisplayedComponent] = useState(
    'funFacts'
  );
  const [radius, setRadius] = useState(planet.radiusInMiles);
  const [distance, setDistance] = useState(planet.distanceInMiles);
  const toKilometers = 1.609344;

  const handleUnitChange = (e) => {
    setUnits(e.target.checked ? "kilometers" : "miles");
  };

  const handleDisplayedComponentChange = (e) => {
    setDisplayedComponent(e.target.value);
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
    );
  }, [dispatch, id, units, planet.name]);

  useEffect(() => {
    setDisplayedComponent('funFacts');
  }, [planet.name]);

  return (
    <div key={planet.id}>
      <RowContainer className="previous-and-next-buttons">
        <SpaceLink
          to={`/planets/${prev}`}
          text="Previous Planet!"
          onClick={() => setUnits("miles")}
        />
        <ColumnContainer className="units-toggle" border={false}>
          <label className="switch">
            <input type="checkbox" name="units" onClick={handleUnitChange} />
            <span className="slider"></span>
          </label>
          Units: {units === "miles" ? "Miles" : "Km"}
        </ColumnContainer>
        <SpaceLink
          to={`/planets/${next}`}
          text="Next Planet!"
          onClick={() => setUnits("miles")}
        />
      </RowContainer>

      <RowContainer className="single-planet-main-container">
        <PlanetInfo
          planet={planet}
          units={units}
          radius={radius}
          distance={distance}
          className="single-planet-info"
        />

        <SinglePlanetImageDisplay planet={planet} />

        <ColumnContainer
          className="single-planet-info-display-container"
          margin="5vh 2vw 0 0"
        >
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
          <ColumnContainer className="fun-and-moons" width="30vw" margin="0 0 20vh 0">
             {planet && planet.name ? ( displayedComponent === "funFacts" ? <FunFacts planet={planet} units={units} />
              : <Moons planet={planet} units={units} /> ) : null}
          </ColumnContainer>
        </ColumnContainer>
      </RowContainer>
    </div>
  );
};

export default Planet;
