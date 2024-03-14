import React, { useEffect, useState } from "react";
import { getCategories } from "../../../services/Api";
import { Link } from "react-router-dom";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(({ data }) => setCategories(data?.data?.docs));
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {categories?.map((category) => (
                <li key={category._id} className="menu-item">
                  <Link to={`/category-${category._id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
