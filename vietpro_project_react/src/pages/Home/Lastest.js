import React from "react";
import data from "./HomeData/LastestData.json";
import ProductItem from "../../shared/components/ProductItem";

const Lastest = () => {
  return (
    <div className="products">
      <h3>Sản phẩm mới</h3>
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

export default Lastest;
