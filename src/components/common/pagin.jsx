import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagin = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageLen = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageLen + 1);

  if (pageLen === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagin.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired
};

export default Pagin;
