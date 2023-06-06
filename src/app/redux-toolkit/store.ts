import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./slices/songSlice";
import playedReducer from "./slices/playingSlice";
import loadingReducer from "./slices/loadingSlice";
import shuffleSlice from "./slices/shuffleSlice";
import songDetailSlice from "./slices/songDetailSlice";
import likedSlice from "./slices/likedPlaylistSlice";

export const store = configureStore({
  reducer: {
    song: songReducer,
    played: playedReducer,
    loading: loadingReducer,
    shuffle: shuffleSlice,
    songDetail: songDetailSlice,
    likedSlice: likedSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
