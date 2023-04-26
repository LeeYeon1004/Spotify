import { configureStore } from '@reduxjs/toolkit'
import songReducer from './slices/songSlice'
import playedSlice from './slices/playingSlice'

export const store = configureStore({
  reducer: {
    song: songReducer,
    played: playedSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch