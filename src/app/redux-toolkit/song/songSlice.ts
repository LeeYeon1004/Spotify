import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SongState {
  song: any;
}

const initialState: SongState = {
  song: {},
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    onChangeSong: (state, action: PayloadAction<any>) => {
      state.song = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChangeSong } = songSlice.actions;

export default songSlice.reducer;
