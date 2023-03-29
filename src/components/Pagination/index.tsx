import { FC } from "react";
import ReactPaginate from "react-paginate";

import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      forcePage={currentPage - 1}
    />
  );
};
