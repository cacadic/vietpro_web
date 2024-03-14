import React, { useEffect, useState } from "react";
import ProductItem from "../../shared/components/ProductItem";
import { getProducts } from "../../services/Api";

const Feature = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getProducts({ params: { limit: 6, "filter[is_featured]": true } }).then(
      ({ data }) => {
        setFeaturedProducts(data?.data?.docs);
      }
    );
  }, []);

  return (
    <div className="products">
      <h3>Sản phẩm nổi bật</h3>
      <div className="product-list card-deck">
        {featuredProducts?.map((product) => (
          <ProductItem key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
