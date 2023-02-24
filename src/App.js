import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Outlet searchValue={searchValue}></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
