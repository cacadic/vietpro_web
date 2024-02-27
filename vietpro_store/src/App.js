import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import UserPage from "./components/UserManager/UserPage";

const App = () => {
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://reqres.in/api/users",
  //     // data: {},
  //   })
  //     .then((res) => console.log(res.data.data))
  //     .catch((error) => console.error(error));
  // }, []);

  // const getUser = async () => {
  //   const res = await axios("https://reqres.in/api/users");
  //   console.log(res);
  //   return res;
  // };

  // getUser();

  return (
    <Provider store={store}>
      <BrowserRouter></BrowserRouter>
      <UserPage />
    </Provider>
  );
};

export default App;
