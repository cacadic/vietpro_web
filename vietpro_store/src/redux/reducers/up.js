// const initState = {
//   num: 0,
// };

// const upReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "UP":
//       return { ...state, num: ++state.num };
//     case "RESET":
//       return { ...state, num: action.payload };
//     default:
//       return state;
//   }
// };

// export default upReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
};

const upReducer = createSlice({
  name: "upReducer",
  initialState,
  reducers: {
    up: (state, action) => {
      state.num += 1;
    },
    reset: (state, action) => {
      state.num = action.payload;
    },
  },
});

export const { up, reset } = upReducer.actions;

export default upReducer.reducer;
