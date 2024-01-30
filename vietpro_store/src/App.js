import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Timer from "./components/Timer";

const App = () => {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
};

export default App;
