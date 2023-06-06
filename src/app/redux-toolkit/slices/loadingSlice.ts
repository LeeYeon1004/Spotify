import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: true,
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    onChangeLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    
  },
});

export const { onChangeLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
