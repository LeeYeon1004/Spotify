import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShuffleState {
  shuffle: boolean;
}

const initialState: ShuffleState = {
  shuffle: false,
};

export const shuffleSlice = createSlice({
  name: "shuffleSlice",
  initialState,
  reducers: {
    onChangeShuffle: (state, action: PayloadAction<boolean>) => {
      state.shuffle = action.payload;
    },
  },
});

export const { onChangeShuffle } = shuffleSlice.actions;

export default shuffleSlice.reducer;
