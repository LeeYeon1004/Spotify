import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../api/api";
import { Audios } from "../../core/models/home.interface";

export interface SongState {
  songItem: Audios;
  volume: number;
}

const initialState: SongState = {
  songItem: Song[0],
  volume: 30,
};

export const songSlice = createSlice({
  name: "songSlice",
  initialState,
  reducers: {
    onChangeSong: (state, action: PayloadAction<Audios>) => {
      state.songItem = action.payload;
    },
    onChangeVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChangeSong, onChangeVolume } = songSlice.actions;

export default songSlice.reducer;
