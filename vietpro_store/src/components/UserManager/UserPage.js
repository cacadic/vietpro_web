import React from "react";
import HeaderUser from "./HeaderUser";
import TableUser from "./TableUser";

const UserPage = () => {
  return (
    <div id="wrapper" className="container">
      <HeaderUser />
      <TableUser />
    </div>
  );
};

export default UserPage;
