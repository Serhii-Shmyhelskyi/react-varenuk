import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import VarenukBlock from "../components/varenukBlock";
import { Skeleton } from "../components/varenukBlock/Skeleton.jsx";

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("  https://63ebc7d7be929df00ca23593.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі вареники</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <VarenukBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}
