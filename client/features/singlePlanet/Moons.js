import React from "react";

const Moons = (props) => {
  const moons = props.moons;
  const planetName = props.planetName;

  console.log(moons);

  return (
    <div>
      <h3>{planetName}'s Moons:</h3>
      <table>
        <thead>
          <tr>
            <th align="right">Name</th>
            <th align="right">Origin of Name</th>
            <th align="right">Radius in Miles</th>
          </tr>
        </thead>
      </table>
      {moons.map((moon) => {
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
      })}
      <p>*Some moon radii may vary depending on moon shape*</p>
    </div>
  );
};

export default Moons;
