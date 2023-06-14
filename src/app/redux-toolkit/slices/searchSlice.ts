import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchValue: string;
  clear: boolean;
}

const initialState: SearchState = {
  searchValue: "",
  clear: false,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    valueSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearValue: (state, action: PayloadAction<boolean>) => {
      state.clear = action.payload;
    },
  },
});

export const { valueSearch } = searchSlice.actions;
export const { clearValue } = searchSlice.actions;

export default searchSlice.reducer;
