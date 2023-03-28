import React from "react";
import { useSelector } from "react-redux";
import { SinglePlanetImage, TheSun } from "../../styled-components/planetdisplays";
import SolarSystem from "../solarSystem/SolarSystem";
import SolarSystemOrbit from "../solarSystem/SolarSystemOrbit";

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div className="home">

      <SolarSystem></SolarSystem>
    </div>
  );
};

export default Home;
