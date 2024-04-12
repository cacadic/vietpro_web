import React, { useCallback, useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ pages }) => {
  const { total, currentPage, next, prev, hasNext, hasPrev, limit } = pages;

  const { pathname, search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const renderPagesHTML = useCallback(
    (delta = 2) => {
      const pages = [];
      const left = currentPage - delta;
      const right = currentPage + delta;

      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 ||
          i === currentPage ||
          i === totalPages ||
          (i >= left && i <= right)
        ) {
          pages.push(i);
        }
      }

      return pages;
    },
    [currentPage, totalPages]
  );

  const formatUrl = useCallback(
    (page) => `${pathname}?keyword=${searchParams.get("keyword")}&page=${page}`,
    [pathname, searchParams]
  );

  return (
    <div id="pagination">
      <ul className="pagination">
        {hasPrev && (
          <li className="page-item">
            <Link className="page-link" to={formatUrl(currentPage - 1)}>
              Trang trước
            </Link>
          </li>
        )}

        {renderPagesHTML().map((page) => (
          <li
            className={`page-item ${page === currentPage ? "active" : ""}`}
            key={page}
          >
            <Link className="page-link" to={formatUrl(page)}>
              {page}
            </Link>
          </li>
        ))}

        {hasNext && (
          <li className="page-item">
            <Link className="page-link" to={formatUrl(currentPage + 1)}>
              Trang sau
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
