// import { configureStore } from "@reduxjs/toolkit";
// import slices from "./slices";

// const rootReducer = {
//   slice: slices,
// };

// const store = configureStore({
//   reducer: rootReducer,
// });
// export default store; --> toolkit

// core
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export default store;
