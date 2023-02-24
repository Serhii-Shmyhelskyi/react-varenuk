import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={2}
      />
    </div>
  );
};

export default Pagination;
