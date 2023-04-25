import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SongState {
  song: any;
  volume: number;
}

const initialState: SongState = {
  song: {
    img: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
    title: "‘꽃(FLOWER)’",
    description: "JISOO - ‘꽃(FLOWER)’",
    link: "../../../../assets/songs/1.mp3",
    singer: "JSOO",
    time: "03:00",
  },
  volume: 25,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    onChangeSong: (state, action: PayloadAction<any>) => {
      state.song = action.payload;
    },
    onChangeVolume: (state, action: PayloadAction<any>) => {
      state.volume = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChangeSong, onChangeVolume } = songSlice.actions;

export default songSlice.reducer;
