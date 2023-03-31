import React from "react";

import SolarSystem from "../solarSystem/SolarSystem";
import HomeText from "./HomeText";

const Home = () => {
  return (
    <div className="home">
      <SolarSystem></SolarSystem>
      <HomeText />
    </div>
  );
};

export default Home;
