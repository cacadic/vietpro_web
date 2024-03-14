import React from "react";
import CurrencyFormat from "react-currency-format";
import { getImageProduct } from "../../../utils";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { _id, name, price, image, link = "#" } = item;
  return (
    <Link
      to={`/ProductDetail-${_id}`}
      className="product-item card text-center"
    >
      <a href={link}>
        <img src={getImageProduct(image)} alt={name} />
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
    </Link>
  );
};

export default ProductItem;
