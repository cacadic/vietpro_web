import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu">
      <ul>
        <li>
          <Link to="/">view users</Link>
        </li>
        <li>
          <Link to="/posts">view posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
