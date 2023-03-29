import React from "react";
import { useState } from "react";
const Moons = (props) => {
  const moons = props.moons;
  const planetName = props.planetName;
  const [distance, setDistance] = useState(false);

  const handleChange = (e) => {
    setDistance(e.target.checked);
    console.log(e.target.checked);
  };
  console.log(moons);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" name="distance" onClick={handleChange} />

        <span className="slider"></span>
      </label>
      {distance ? <p>Switch to miles</p> : <p>Switch to kilometers</p>}
      <h1>{planetName}</h1>
      <h3>{planetName}'s Moons:</h3>
      <table>
        <thead>
          <tr>
            <th align="right">Name</th>
            <th align="right">Origin of Name</th>
            {distance ? (
              <th align="right">Radius in Kilometers</th>
            ) : (
              <th align="right">Radius in Miles</th>
            )}
          </tr>
        </thead>
      </table>

      {/* {moons.map((moon) => {
        let num = +moon.radiusInMiles;
        let radiusKm = (num * 1.609344).toFixed(3);

        return (
          <div key={moon.id}>
            <table>
              <tbody>
                <tr>
                  <th>{moon.name}</th>
                  <th>{moon.history}</th>
                  {distance ? (
                    <th>{radiusKm}</th>
                  ) : (
                    <th>{moon.radiusInMiles}</th>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        );
      })} */}

      <p>*Some moon radii may vary depending on moon shape*</p>
    </div>
  );
};

export default Moons;
