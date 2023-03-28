import React from "react";
import { Route, Routes } from "react-router-dom";
import Planet from "../features/singlePlanet/SinglePlanet";
import Moon from "../features/singleMoon/SingleMoon";

import Home from "../features/home/Home";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/moons/:id" element={<Moon />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
