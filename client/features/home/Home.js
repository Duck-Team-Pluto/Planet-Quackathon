import React from "react";

import SolarSystem from "../solarSystem/SolarSystem";
import HomeText from "./HomeText";
import { TheSun } from "../../styled-components/PlanetDisplays";
import { ColumnContainer, RowContainer } from "../../styled-components/Containers";

const Home = () => {
  return (
    <div className="home">
      <RowContainer width="100vw">
        <SolarSystem></SolarSystem>
      </RowContainer>
      <RowContainer>
      <ColumnContainer>
          <TheSun />
        </ColumnContainer>
        <ColumnContainer>
          <HomeText />
        </ColumnContainer>

      </RowContainer>
    </div>
  );
};

export default Home;
