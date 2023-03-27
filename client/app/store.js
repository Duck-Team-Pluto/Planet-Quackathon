import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "../features/singlePlanet/singlePlanetSlice";

const store = configureStore({
  reducer: {
    planet: planetReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
