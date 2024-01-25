import React from "react";
import { Provider } from "react-redux";
import Random from "./components/Random";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Random />
    </Provider>
  );
};

export default App;
