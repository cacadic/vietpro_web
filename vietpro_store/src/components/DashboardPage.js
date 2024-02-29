import React from "react";
import Header from "./Dashboard/shared/components/Layout/Header";
import Menu from "./Dashboard/shared/components/Layout/Menu";
import User from "./Dashboard/pages/User";
import Post from "./Dashboard/pages/Post";
import { Route, Routes } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div id="wrapper" className="container">
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/*" element={<User />} />
      </Routes>

      {/* <User /> */}
    </div>
  );
};

export default DashboardPage;
