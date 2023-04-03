import { Outlet } from "react-router-dom";

import { Header } from "./components";

import "./scss/app.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default App;
