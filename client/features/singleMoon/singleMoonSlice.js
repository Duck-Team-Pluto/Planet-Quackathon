import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMoonAsync = createAsyncThunk(
  "moons/fetchSingle",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/moons/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const moonSlice = createSlice({
  name: "moon",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoonAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectMoon = (state) => {
  return state.moon;
};

export default moonSlice.reducer;
