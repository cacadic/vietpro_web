const initState = {
  time2: 10,
};

const reducer2 = (state = initState, action) => {
  switch (action.type) {
    case "DOWN_RE2":
      return { ...state, time2: state.time2 - 1 };
    case "RESET_RE2":
      return { ...state, time2: 10 };
    default:
      return state;
  }
};

export default reducer2;
