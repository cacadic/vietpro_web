import React, { useEffect, useState } from "react";
import "./css/product.css";
import { useParams } from "react-router-dom";
import {
  createCommentProduct,
  getCommentsProduct,
  getProduct,
} from "../../services/Api";
import { getImageProduct } from "../../utils";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState({});

  const { id } = useParams();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputComment({ ...inputComment, [name]: value });
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    createCommentProduct(id, inputComment).finally(() => {
      getComments(id);
      setInputComment({});
    });
  };

  const getComments = (id) => {
    getCommentsProduct(id, { param: { limit: 30 } }).then(({ data }) =>
      setComments(data.data.docs)
    );
  };

  useEffect(() => {
    getProduct(id).then(({ data }) => setProduct(data.data));
    getComments(id);
  }, [id]);

  return (
    <>
      {/*	List Product	*/}
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img src={getImageProduct(product?.image)} alt={product?.name} />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{product?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm:</span> {product?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {product?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span> {product?.promotion}
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">
                <CurrencyFormat
                  value={product?.price ?? 0}
                  displayType={"text"}
                  thousandSeparator={" "}
                  suffix=" đ"
                />
              </li>
              <li
                id="status"
                style={!product?.is_stock ? { color: "#eb1f27" } : {}}
              >
                {product?.is_stock ? "Còn hàng" : "Hết hàng"}
              </li>
            </ul>
            <div id="add-cart">
              <a href="#">Mua ngay</a>
            </div>
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Đánh giá về {product?.name}</h3>
            <p>{product?.details}</p>
          </div>
        </div>
        {/*	Comment	*/}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post">
              <div className="form-group">
                <label>Tên:</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="form-control"
                  onChange={onChangeInput}
                  value={inputComment?.name ?? ""}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                  onChange={onChangeInput}
                  value={inputComment?.email ?? ""}
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="content"
                  required
                  rows={8}
                  className="form-control"
                  onChange={onChangeInput}
                  value={inputComment?.content ?? ""}
                />
              </div>
              <button
                type="submit"
                name="sbm"
                className="btn btn-primary"
                onClick={onSubmitComment}
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
        {/*	End Comment	*/}
        {/*	Comments List	*/}
        <div id="comments-list" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {comments?.map((comment) => (
              <div className="comment-item" key={comment._id}>
                <ul>
                  <li>
                    <b>{comment.name}</b>
                  </li>
                  <li>{moment(comment.createdAt).fromNow()}</li>
                  <li>{comment.content}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/*	End Comments List	*/}
      </div>
      {/*	End Product	*/}
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

export default ProductDetails;
