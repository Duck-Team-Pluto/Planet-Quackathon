import React from "react";
import {
  StarBackground,
  TwinkleStars,
} from "../styled-components/starbackground";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import AppBackground from "./AppBackground";
import { RowContainer } from "../styled-components/Containers";

const App = () => {
  return (
    <div id='main'>
      <RowContainer>
        <AppRoutes />
      </RowContainer>

      <RowContainer margin="0 1vw 0 -1.5vw">
        <Navbar />
      </RowContainer>
      <AppBackground />
    </div>
  );
};

export default App;
