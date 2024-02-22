import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Timer from "./components/Timer";
import Number2 from "./components/Number2";

const App = () => {
  return (
    <Provider store={store}>
      <Number2 />
    </Provider>
  );
};

export default App;
