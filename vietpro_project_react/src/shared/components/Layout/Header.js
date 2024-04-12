import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const items = useSelector(({ Cart }) => Cart.items);

  const onSearchHandle = (e) => {
    e.preventDefault();

    if (keyword === "") return;

    return navigate(`/search?keyword=${keyword}`);
  };

  useEffect(() => {
    if (location.pathname.toLowerCase() === "/search") {
      setKeyword(searchParams.get("keyword"));
    }
  }, [location?.pathname, searchParams]);

  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <Link to="/">
                <img className="img-fluid" src="images/logo.png" />
              </Link>
            </h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form className="form-inline">
              <input
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
              <button
                className="btn btn-danger mt-3"
                type="submit"
                onClick={onSearchHandle}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <a className="mt-4 mr-2" href="#">
              giỏ hàng
            </a>
            <span className="mt-3">
              {items?.reduce(
                (accumulator, currentValue) => accumulator + currentValue.qty,
                0
              )}
            </span>
          </div>
        </div>
      </div>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
};

export default Header;
