import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMoon, fetchMoonAsync } from "./singleMoonSlice";
import { RowContainer } from "../../styled-components/Containers";
import SpaceLink from "../../styled-components/SpaceLink";

const Moon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const moon = useSelector((state) => state.moon);
  let next = +id + 1;
  let prev = +id - 1;
  if (next > 168) next = 1;
  if (prev < 1) prev = 168;
  let planet = moon.planet;
  useEffect(() => {
    dispatch(fetchMoonAsync(id));
  }, [dispatch]);
  return (
    <div key={moon.id}>
      <RowContainer className="previous-and-next-buttons">
      <SpaceLink to={`/planets/${prev}`} text='Previous Planet!'/>
      <SpaceLink to={`/planets/${next}`} text='Next Planet!'/>
    </RowContainer>
      <div className="single-planet">
        <h1>{moon.name}</h1>
        <div>
          {moon.planet ? <h2>Associated Planet: {moon.planet.name}</h2> : null}
        </div>
        <h2>Radius (mi): {moon.radiusInMiles}</h2>
        <h2>History of Name: {moon.history}</h2>
      </div>
    </div>
  );
};

export default Moon;
