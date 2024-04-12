import React, { useEffect, useState } from "react";
import "./css/category.css";
import ProductItem from "../../shared/components/ProductItem";
import { useParams } from "react-router-dom";
import { getCategory, getProductsCategory } from "../../services/Api";
import { getImageProduct } from "../../utils";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [total, setTotal] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    getProductsCategory(id, { params: { limit: 9 } }).then(({ data }) => {
      setTotal(data?.data?.pages?.total);
      setProducts(data?.data?.docs);
    });

    getCategory(id).then(({ data }) => setCategory(data.data.name));
  }, [id]);

  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <h3>
          {category} (hiện có {total} sản phẩm)
        </h3>
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
