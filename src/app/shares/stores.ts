import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

const rootReducer = {
  slice: slices,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
