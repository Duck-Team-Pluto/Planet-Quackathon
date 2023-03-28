import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPlanetsAsync = createAsyncThunk(
  "planets/fetchAll",
  async () => {
    try {
      const { data } = await axios.get(`/api/planets`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const solarSystemSlice = createSlice({
  name: "planets",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPlanetsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default solarSystemSlice.reducer;
