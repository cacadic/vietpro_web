import React from "react";

const ProductItem = ({ product }) => {
  const { name, price, img, link = "#" } = product;
  return (
    <div className="product-item card text-center">
      <a href={link}>
        <img src={img} />
      </a>
      <h4>
        <a href={link}>{name}</a>
      </h4>
      <p>
        Giá Bán: <span>{price}đ</span>
      </p>
    </div>
  );
};

export default ProductItem;
