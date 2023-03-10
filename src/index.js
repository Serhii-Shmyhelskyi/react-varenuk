import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart";
import CartEmpty from "./pages/CartEmpty";

import store from "./redux/store";
import FullVarenuk from "./pages/FullVarenuk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cartEmpty",
        element: <CartEmpty />,
      },
      {
        path: "/varenuk/:id",
        element: <FullVarenuk />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
