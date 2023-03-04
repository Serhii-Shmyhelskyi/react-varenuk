import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  setCategoryId,
  setSort,
  setCurrentPage,
} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import VarenukBlock from "../components/VarenukBlock";
import Pagination from "../components/Pagination";
import { Skeleton } from "../components/VarenukBlock/Skeleton.jsx";
import { SearchContext } from "../App";

export default function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
  };

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://63ebc7d7be929df00ca23593.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  const varenuks = items.map((obj) => <VarenukBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      <div className="content__items">{isLoading ? skeletons : varenuks}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
