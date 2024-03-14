import React, { useEffect, useState } from "react";
import "./css/category.css";
import ProductItem from "../../shared/components/ProductItem";
import { useParams } from "react-router-dom";
import { getProductsCategory } from "../../services/Api";
import { getImageProduct } from "../../utils";

const Category = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProductsCategory(id, { params: { limit: 9 } }).then(({ data }) => {
      const products = data?.data?.docs;
      console.log(products);
      setProducts(
        products.map((product) => ({
          ...product,
          image: getImageProduct(product.image),
        }))
      );
    });
  }, []);

  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <h3>iPhone (hiện có 186 sản phẩm)</h3>
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

export default Category;
