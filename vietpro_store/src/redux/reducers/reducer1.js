const initState = {
  time1: 0,
};

const reducer2 = (state = initState, action) => {
  switch (action.type) {
    case "UP_RE1":
      return { ...state, time1: state.time1 + 1 };
    case "RESET_RE1":
      return { ...state, time1: 0 };
    default:
      return state;
  }
};

export default reducer2;
