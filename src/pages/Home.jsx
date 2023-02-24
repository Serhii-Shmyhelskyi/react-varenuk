import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import VarenukBlock from "../components/VarenukBlock";
import Pagination from "../components/Pagination";
import { Skeleton } from "../components/VarenukBlock/Skeleton.jsx";

export default function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярності",
    sortProperty: "rating",
  });

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

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
  }, [categoryId, sortType, searchValue, currentPage]);

  const varenuks = items.map((obj) => <VarenukBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      <div className="content__items">{isLoading ? skeletons : varenuks}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
