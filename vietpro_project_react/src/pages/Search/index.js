import React from "react";
import "./css/search.css";
import data from "./SearchData/SearchData.json";
import ProductItem from "../../shared/components/ProductItem";

const Search = () => {
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span>
        </div>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) => i < 3 && <ProductItem key={i} item={product} />
          )}
        </div>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) =>
              i >= 3 && i < 6 && <ProductItem key={i} item={product} />
          )}
        </div>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) => i >= 6 && <ProductItem key={i} item={product} />
          )}
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
