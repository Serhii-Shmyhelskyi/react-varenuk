import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";

import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Outlet></Outlet>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
