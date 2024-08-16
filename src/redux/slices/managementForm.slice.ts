import { createSlice } from "@reduxjs/toolkit";

export const managementSlice = createSlice({
  name: "management",
  initialState: {
    active: false,
  },
  reducers: {
    change: (state) => {
      state.active = !state.active;
    },
  },
});

export const { change } = managementSlice.actions;

export const selectManagement = (state: { active: boolean }) => state.active;

export default managementSlice.reducer;
