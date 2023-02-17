import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

import "./scss/app.scss";
import VarenukBlock from "./components/VarenukBlock";

import items from "./assets/varenuk.json";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі вареники</h2>
          <div className="content__items">
            {items.map((obj, index) => (
              <VarenukBlock key={index} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
