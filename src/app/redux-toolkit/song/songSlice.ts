import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  song: any
}

const initialState: CounterState = {
  value: 0,
  song: {}
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onChangeSong: (state, action) => {
      state.song = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { onChangeSong } = counterSlice.actions

export default counterSlice.reducer