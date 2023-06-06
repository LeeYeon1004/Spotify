import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Audios } from "../../core/models/home.interface";
import { Song } from "../../api/api";

export interface LikedState {
  LikedPlaylistSong: Audios[];
}

const initialState: LikedState = {
  LikedPlaylistSong: [Song[0]],
};

export const likedSlice = createSlice({
  name: "likedSlice",
  initialState,
  reducers: {
    addSongLiked: (state, action: PayloadAction<Audios>) => {
      state.LikedPlaylistSong = [...state.LikedPlaylistSong, action.payload];
    },
    removeSongLiked: (state, action: PayloadAction<Audios>) => {
      state.LikedPlaylistSong = state.LikedPlaylistSong.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addSongLiked } = likedSlice.actions;
export const { removeSongLiked } = likedSlice.actions;

export default likedSlice.reducer;
