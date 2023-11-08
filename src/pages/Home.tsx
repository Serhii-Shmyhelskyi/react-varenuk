import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Categories,
  Sort,
  VarenukBlock,
  Pagination,
  Skeleton,
} from "../components";

import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId, setCurrentPage, setSort } from "../redux/filter/slice";
import { SortSlice } from "../redux/filter/types";
import { selectVarenuk } from "../redux/varenuk/selectors";
import { fetchVarenuks } from "../redux/varenuk/asyncActions";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectVarenuk);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const onChangeSort = (obj: SortSlice) => {
    dispatch(setSort(obj));
  };

  const getVarenuks = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchVarenuks({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  useEffect(() => {
    getVarenuks();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const varenuks = items.map((obj) => <VarenukBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль не вдалося отримати вариники</p>
          <p>Спробуйте повторити пізніше</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : varenuks}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
