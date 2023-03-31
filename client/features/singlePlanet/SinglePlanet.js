import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlanetAsync } from "./singlePlanetSlice";
import { SinglePlanetImage } from "../../styled-components/PlanetDisplays";
import Moons from "./Moons";
import PlanetInfo from "./PlanetInfo";
import {
  ColumnContainer,
  RowContainer,
  SinglePlanetImageContainer,
} from "../../styled-components/Containers";
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

  const [units, setUnits] = useState("miles");

  const handleChange = (e) => {
    setUnits(e.target.checked ? "kilometers" : "miles");
    console.log(e.target.checked);
  };

  return (
    <div key={planet.id}>
      <RowContainer className="previous-and-next-buttons">
        <SpaceLink to={`/planets/${prev}`} text="Previous Planet!" />
        <ColumnContainer className="units-toggle" border={false}>
          <label className="switch">
            <input type="checkbox" name="units" onClick={handleChange} />
            <span className="slider"></span>
          </label>
          Units: {units === "miles" ? "Miles" : "Km"}
        </ColumnContainer>
        <SpaceLink to={`/planets/${next}`} text="Next Planet!" />
      </RowContainer>
      <RowContainer className="single-planet-main-container">
        {planet && planet.name ? (
          <PlanetInfo planet={planet} units={units}></PlanetInfo>
        ) : null}
        <ColumnContainer>
          <SinglePlanetImageContainer>
            <SinglePlanetImage
              radius={planet.radiusInMiles}
              colorOne={planet.colorOne}
              colorTwo={planet.colorTwo}></SinglePlanetImage>
          </SinglePlanetImageContainer>
          {planet.moons && planet.moons.length ? (
            <Moons
              planetName={planet.name}
              moons={planet.moons}
              units={units}></Moons>
          ) : null}
        </ColumnContainer>
      </RowContainer>
    </div>
  );
};

export default Planet;
