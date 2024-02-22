// import { createStore } from "redux";
// import reducers from "./reducers";

// const store = createStore(reducers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import upReducer from "./reducers/up";

const store = configureStore({
  reducer: {
    Up: upReducer,
  },
});

export default store;
