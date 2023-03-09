import React from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setCategoryId,
  setSort,
  setCurrentPage,
  setFilters,
  selectFilter,
} from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort";
import VarenukBlock from "../components/VarenukBlock";
import Pagination from "../components/Pagination";
import { Skeleton } from "../components/VarenukBlock/Skeleton.jsx";

import { fetchVarenuks, selectVarenuk } from "../redux/slices/varenukSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectVarenuk);

  const onChangeCategory = React.useCallback((idx) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const onChangeSort = (obj) => {
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
        currentPage,
      })
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    getVarenuks();
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty == params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getVarenuks();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortPropert, searchValue, currentPage]);

  const varenuks = items.map((obj) => <VarenukBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      {status == "error" ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль не вдалося отримати вариники</p>
          <p>Спробуйте повторити пізніше</p>
        </div>
      ) : (
        <div className="content__items">
          {status == "loading" ? skeletons : varenuks}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
