import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMoon, fetchMoonAsync } from "./singleMoonSlice";
import {
  ColumnContainer,
  RowContainer,
} from "../../styled-components/Containers";
import { Link } from "react-router-dom";
import SpaceLink from "../../styled-components/SpaceLink";

const Moon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const moon = useSelector((state) => state.moon);
  const [units, setUnits] = useState("miles");
  let next = +id + 1;
  let prev = +id - 1;
  if (next > 168) next = 1;
  if (prev < 1) prev = 168;
  useEffect(() => {
    dispatch(fetchMoonAsync(id));
  }, [dispatch, id]);

  const handleChange = (e) => {
    setUnits(e.target.checked ? "kilometers" : "miles");
  };
  return (
    <div key={moon.id}>
      <RowContainer className="previous-and-next-buttons">
        <SpaceLink
          to={`/moons/${prev}`}
          text="Previous Moon!"
          onClick={() => setUnits("miles")}
        />
        <ColumnContainer className="units-toggle" border={false}>
          <label className="switch">
            <input type="checkbox" name="units" onClick={handleChange} />
            <span className="slider"></span>
          </label>
          Units: {units === "miles" ? "Miles" : "Km"}
        </ColumnContainer>
        <SpaceLink
          to={`/moons/${next}`}
          text="Next Moon!"
          onClick={() => setUnits("miles")}
        />
      </RowContainer>
      <ColumnContainer className="single-moon">
        <h1>{moon.name}</h1>
        <div>
          {moon.planet ? (
            <h2>
              Associated Planet:{" "}
              <Link className="about-a" to={`/planets/${moon.planet.id}`}>
                {moon.planet.name}
              </Link>
            </h2>
          ) : null}
        </div>
        <h2>
          Radius{" "}
          {units === "miles"
            ? `(mi) ${moon.radiusInMiles}`
            : `(km) ${+moon.radiusInMiles * 1.61}`}
        </h2>
        <h2>History of Name: {moon.history}</h2>
      </ColumnContainer>
    </div>
  );
};

export default Moon;
