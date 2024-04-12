import React from "react";
import { getImageProduct } from "../../../utils";

const ProductCartItem = ({ item }) => {
  return (
    <div className="cart-item row">
      <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
        <img src={getImageProduct(item.image)} alt={item.name} />
        <h4>{item.name}</h4>
      </div>
      <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
        <input
          type="number"
          id="quantity"
          className="form-control form-blue quantity"
          defaultValue={item.qty}
          min={1}
        />
      </div>
      <div className="cart-price col-lg-3 col-md-3 col-sm-12">
        <b>{item.price * item.qty}đ</b>
        <a href="#">Xóa</a>
      </div>
    </div>
  );
};

export default ProductCartItem;
