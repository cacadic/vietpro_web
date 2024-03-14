import React from "react";
import CurrencyFormat from "react-currency-format";

const ProductItem = ({ item }) => {
  const { name, price, image, link = "#" } = item;
  return (
    <div className="product-item card text-center">
      <a href={link}>
        <img src={image} alt={name} />
      </a>
      <h4>
        <a href={link}>{name}</a>
      </h4>
      <p>
        Giá Bán:{" "}
        <span>
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={" "}
            suffix=" đ"
          />
        </span>
      </p>
    </div>
  );
};

export default ProductItem;
