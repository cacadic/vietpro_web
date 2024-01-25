import { createStore } from "redux";

const initState = {
  num: 10,
};

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_NUMBER":
      return { ...state, num: randomIntFromInterval(0, 10) };
    case "GET_RESET":
      return { ...state, num: 10 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
