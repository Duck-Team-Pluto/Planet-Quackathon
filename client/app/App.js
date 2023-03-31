import React from "react";
import {
  StarBackground,
  TwinkleStars,
} from "../styled-components/starbackground";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import AppBackground from "./AppBackground";

const App = () => {
  return (
    <div id='main'>
      <AppRoutes />
      <Navbar />
      <AppBackground />
    </div>
  );
};

export default App;
