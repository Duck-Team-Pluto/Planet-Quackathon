import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "../features/singlePlanet/singlePlanetSlice";
import solarSystemReducer from "../features/solarSystem/solarSystemSlice";


const store = configureStore({
  reducer: {
    planet: planetReducer,
    planets: solarSystemReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
