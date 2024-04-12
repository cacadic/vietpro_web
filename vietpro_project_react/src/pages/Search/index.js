import React, { useEffect, useMemo, useState } from "react";
import "./css/search.css";
import ProductItem from "../../shared/components/ProductItem";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Api";
import Pagination from "../../shared/components/Pagination";

const LIMIT = 12;

const Search = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState({});

  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = useMemo(
    () => Number(searchParams.get("page")) ?? 1,
    [searchParams]
  );

  useEffect(() => {
    if (location.pathname.toLowerCase() === "/search") {
      getProducts({
        params: { name: searchParams.get("keyword"), limit: LIMIT, page },
      }).then(({ data }) => {
        setProducts(data.data.docs);
        setPages({
          ...data.data.pages,
          limit: LIMIT,
        });
      });
    }
  }, [searchParams, location, page]);

  return (
    <>
      {/*	List Product	*/}
      <div className="products">
        <div id="search-result">
          Kết quả tìm kiếm với sản phẩm{" "}
          <span>{searchParams.get("keyword")}</span>
        </div>
        <div className="product-list card-deck">
          {products?.map((product) => (
            <ProductItem key={product._id} item={product} />
          ))}
        </div>
      </div>
      {/*	End List Product	*/}
      <Pagination pages={pages} />
    </>
  );
};

export default Search;
