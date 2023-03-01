import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryId, setSort } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import VarenukBlock from "../components/VarenukBlock";
import Pagination from "../components/Pagination";
import { Skeleton } from "../components/VarenukBlock/Skeleton.jsx";
import { SearchContext } from "../App";

export default function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSort = (pbj) => {
    dispatch(setSort(pbj));
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63ebc7d7be929df00ca23593.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
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
        <Sort value={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      <div className="content__items">{isLoading ? skeletons : varenuks}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
