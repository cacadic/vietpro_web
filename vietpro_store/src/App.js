import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
