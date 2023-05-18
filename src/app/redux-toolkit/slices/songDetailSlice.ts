import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Audios } from "../../core/models/home.interface";
import { Song } from "../../api/api";

export interface SongDetail {
    option: Audios
}

const initialState: SongDetail = {
    option: Song[0]
};

export const songDetailSlice = createSlice({
  name: "songDetailSlice",
  initialState,
  reducers: {
    onChangeOption: (state, action: PayloadAction<Audios>) => {
      state.option = action.payload;
    },
  },
});

export const { onChangeOption } = songDetailSlice.actions;

export default songDetailSlice.reducer;
