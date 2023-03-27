import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlanetAsync = createAsyncThunk(
  "planets/fetchSingle",
  async (planetId) => {
    try {
      const { data } = await axios.get(`/api/planets/${planetId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const planetSlice = createSlice({
  name: "planet",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlanetAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectPlanet = (state) => {
  return state.planet;
};

export default planetSlice.reducer;
