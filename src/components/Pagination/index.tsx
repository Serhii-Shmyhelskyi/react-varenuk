import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { selectVarenuk } from "../../redux/varenuk/selectors";

import styles from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}) => {
  const { items, pagination } = useSelector(selectVarenuk);

  const pageCount = () => {
    return isNaN(pagination / items.length) ? 0 : pagination / items.length;
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={pageCount()}
      forcePage={currentPage - 1}
    />
  );
};
