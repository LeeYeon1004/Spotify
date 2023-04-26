import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlayState {
  played: boolean;
}

const initialState: PlayState = {
  played: false,
};

export const playedSlice = createSlice({
  name: "played",
  initialState,
  reducers: {
    onChangeStatus: (state, action: PayloadAction<any>) => {
      state.played = action.payload;
    },
  },
});

export const { onChangeStatus } = playedSlice.actions;

export default playedSlice.reducer;
