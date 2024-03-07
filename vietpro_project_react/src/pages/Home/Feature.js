import React from "react";
import data from "./HomeData/FeatureData.json";
import ProductItem from "../../shared/components/ProductItem";

const Feature = () => {
  return (
    <div className="products">
      <h3>Sản phẩm nổi bật</h3>
      <div className="product-list card-deck">
        {data?.map(
          (product, i) => i < 3 && <ProductItem key={i} product={product} />
        )}
      </div>

      <div className="product-list card-deck">
        {data?.map(
          (product, i) => i >= 3 && <ProductItem key={i} product={product} />
        )}
      </div>
    </div>
  );
};

export default Feature;
