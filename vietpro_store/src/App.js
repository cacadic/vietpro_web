import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {" "}
        <DashboardPage />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
