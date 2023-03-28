import React from "react";
import { useSelector } from "react-redux";
import { SinglePlanetImage, TheSun } from "../../styled-components/planetdisplays";
import SolarSystem from "../solarSystem/SolarSystem";

/**
 * COMPONENT
 */
const Home = (props) => {
  return (
    <div>
      <SolarSystem></SolarSystem>
    </div>
  );
};

export default Home;
