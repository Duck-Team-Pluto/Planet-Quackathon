import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "../features/singlePlanet/singlePlanetSlice";
import solarSystemReducer from "../features/solarSystem/solarSystemSlice";
import moonReducer from "../features/singleMoon/singleMoonSlice";

const store = configureStore({
  reducer: {
    planet: planetReducer,
    planets: solarSystemReducer,
    moon: moonReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
