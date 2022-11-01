import { createSlice } from "@reduxjs/toolkit";

const initial: [] = [];

const slices = createSlice({
  name: "slice",
  initialState: initial,
  reducers: {
    rdc: (state: any, action) => {
      state.push(action.payload);
    },
  },
});
const { reducer, actions } = slices;
export const { rdc } = actions;
export default reducer;
