import React from "react";
import "./css/cart.css";
import { useSelector } from "react-redux";
import ProductCartItem from "../../shared/components/ProductCartItem";

const Cart = () => {
  const items = useSelector(({ Cart }) => Cart.items);

  return (
    <>
      {/*	Cart	*/}
      <div id="my-cart">
        <div className="row">
          <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
            Thông tin sản phẩm
          </div>
          <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">
            Tùy chọn
          </div>
          <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
        </div>
        <form method="post">
          {items?.map((item) => (
            <ProductCartItem key={item._id} item={item} />
          ))}

          <div className="row">
            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
              <button
                id="update-cart"
                className="btn btn-success"
                type="submit"
                name="sbm"
              >
                Cập nhật giỏ hàng
              </button>
            </div>
            <div className="cart-total col-lg-2 col-md-2 col-sm-12">
              <b>Tổng cộng:</b>
            </div>
            <div className="cart-price col-lg-3 col-md-3 col-sm-12">
              <b>{items.reduce((sum, item) => sum += item.price * item.qty, 0)}đ</b>
            </div>
          </div>
        </form>
      </div>
      {/*	End Cart	*/}
      {/*	Customer Info	*/}
      <div id="customer">
        <form method="post">
          <div className="row">
            <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                className="form-control"
                required
              />
            </div>
            <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
              <input
                placeholder="Email (bắt buộc)"
                type="text"
                name="mail"
                className="form-control"
                required
              />
            </div>
            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
              <input
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name="add"
                className="form-control"
                required
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <b>Mua ngay</b>
              <span>Giao hàng tận nơi siêu tốc</span>
            </a>
          </div>
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <b>Trả góp Online</b>
              <span>Vui lòng call (+84) 0988 550 553</span>
            </a>
          </div>
        </div>
      </div>
      {/*	End Customer Info	*/}
    </>
  );
};

export default Cart;
