import { Outlet } from "react-router-dom";

import Header from "./components/Header";

import "./scss/app.scss";

function App() {
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
}

export default App;
