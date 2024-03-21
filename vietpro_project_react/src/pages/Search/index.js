import React, { useEffect, useState } from "react";
import "./css/search.css";
import ProductItem from "../../shared/components/ProductItem";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";

const Search = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.pathname.toLowerCase() === "/search") {
      getProducts({
        params: { name: searchParams.get("keyword"), limit: 9 },
      }).then(({ data }) => setProducts(data.data.docs));
    }
  }, [searchParams, location]);

  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm{" "}
          <span>{searchParams.get("keyword")}</span>
        </div>
        <div className="product-list card-deck">
          {products?.map((product) => (
            <ProductItem key={product._id} item={product} />
          ))}
        </div>
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Search;
