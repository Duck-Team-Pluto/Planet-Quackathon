import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table } from "../../styled-components/Table";

const Moons = (props) => {
  const dispatch = useDispatch;
  const moons = props.planet.moons;
  const planetName = props.planet.planetName;
  const units = props.units;
  const displayedComponent = props.displayedComponent;
  useEffect(() => {}, [dispatch]);
  console.log(units);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="headOrigin">Origin of Name</th>
            <th> Units: {units === "miles" ? "Miles" : "Km"}</th>
          </tr>
        </thead>
      </Table>
      {moons && moons.length
        ? moons.map((moon) => {
            return (
              <div key={moon.id}>
                <Table>
                  <tbody>
                    <tr>
                      <th>{moon.name}</th>
                      <th className="headOrigin">{moon.history}</th>
                      <th>
                        {units === "miles"
                          ? `${moon.radiusInMiles}`
                          : `${+moon.radiusInMiles * 1.61}`}
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })
        : "This Planet doesn't have any moons!"}
    </div>
  );
};

export default Moons;
