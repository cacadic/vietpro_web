import React, { useEffect, useState } from "react";
import ProductItem from "../../shared/components/ProductItem";
import { getProducts } from "../../services/Api";
import { getImageProduct } from "../../utils";

const Lastest = () => {
  const [lastesProducts, setLastestProducts] = useState([]);

  useEffect(() => {
    getProducts({ params: { limit: 6 } }).then(({ data }) => {
      setLastestProducts(data?.data?.docs);
    });
  }, []);
  return (
    <div className="products">
      <h3>Sản phẩm mới</h3>
      <div className="product-list card-deck">
        {lastesProducts?.map((product) => (
          <ProductItem key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Lastest;
