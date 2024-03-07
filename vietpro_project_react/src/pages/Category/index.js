import React from "react";
import "./css/category.css";
import data from "./CategoryData/CategoryData.json";
import ProductItem from "../../shared/components/ProductItem";

const Category = () => {
  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <h3>iPhone (hiện có 186 sản phẩm)</h3>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) => i < 3 && <ProductItem key={i} product={product} />
          )}
        </div>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) =>
              i >= 3 && i < 6 && <ProductItem key={i} product={product} />
          )}
        </div>
        <div className="product-list card-deck">
          {data?.map(
            (product, i) => i >= 6 && <ProductItem key={i} product={product} />
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

export default Category;
