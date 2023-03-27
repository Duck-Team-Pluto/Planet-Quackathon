import React from "react";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Planet from "../features/singlePlanet/SinglePlanet";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Planet />
    </div>
  );
};

export default App;
