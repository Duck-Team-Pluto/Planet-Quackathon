import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";
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


  const SinglePlanetDisplays = {
    funFacts: <PlanetInfo planet={planet} units={units}/>,
      moonInfo: <Moons planet={planet}/>,
      planetImage: <SinglePlanetImageDisplay planet={planet}/>
  }

  let next = +id + 1;
  let prev = +id - 1;
  if (next > 9) next = 1;
  if (prev < 1) prev = 9;

  useEffect(() => {
    dispatch(fetchPlanetAsync(id));
  }, [dispatch, id]);

  const [units, setUnits] = useState('miles');
  const [displayedComponent, setDisplayedComponent] = useState('')
  const [radius, setRadius] = useState(+planet.radiusInMiles)
  const[distance, setDistance] = useState(+planet.distanceInMiles)
  const toKilometers = 1.61;

  useEffect(()=>{
    setRadius(units==='miles' ? +planet.radiusInMiles : (+planet.radiusInMiles)*toKilometers)
    setDistance(units==='miles' ? +planet.distanceInMiles : (+planet.distanceInMiles)*toKilometers)
  }, [dispatch, units, id])


  const handleUnitChange = (e) => {
    setUnits(e.target.checked ? "kilometers" : "miles");
    console.log(e.target.checked);
  };

  const handleDisplayedComponentChange = (e) => {
    setDisplayedComponent(SinglePlanetDisplays[e.target.value])
  }


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
        <ColumnContainer className="display-options">
          <input type="radio" id="fun-facts" name="displayedComponent" value="funFacts" onClick={handleDisplayedComponentChange} />
          <label htmlFor="fun-facts">Fun Facts</label>
          <input type="radio" id="planet-image" name="displayedComponent" value="planetImage" onClick={handleDisplayedComponentChange} />
          <label htmlFor="planet-image">Planet Image</label>
          <input type="radio" id="moon-info" name="displayedComponent" value="moonInfo" onClick={handleDisplayedComponentChange} />
          <label htmlFor="moon-info">Moon Info</label>
        </ColumnContainer>
        <SpaceLink to={`/planets/${next}`} text="Next Planet!" />
      </RowContainer>
      <RowContainer className="single-planet-info">
        <h1>{planet.name}</h1>
        <h2>Radius {units==='miles' ? '(Miles)' : '(Km)'} {radius}</h2>
        <h2>Distance from the Sun {units==='miles' ? '(Miles)' : '(Km)'} {distance}</h2>
        <h2>Planet Type: {planet.planetType}</h2>
      </RowContainer>
      <RowContainer className="single-planet-main-container">

        <ColumnContainer className="single-planet-display-container">
          {planet && planet.name ? displayedComponent : null}

        </ColumnContainer>

      </RowContainer>
    </div>
  );
};

export default Planet;
