import React from "react";
import { Route, Routes } from "react-router-dom";
import Planet from "../features/singlePlanet/SinglePlanet";

import Home from "../features/home/Home";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route to="/home" element={<Home />} />
        <Route to="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
