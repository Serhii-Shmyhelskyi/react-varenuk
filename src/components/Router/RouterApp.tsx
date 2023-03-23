import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Cart from "../../pages/Cart";
import CartEmpty from "../../pages/CartEmpty";
import FullVarenuk from "../../pages/FullVarenuk";
import Home from "../../pages/Home";
import NotFound from "../NotFoundBlock";

export const router = createBrowserRouter([
  {
    path: "react-varenuk",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "cartEmpty",
        element: <CartEmpty />,
      },
      {
        path: "varenuk/:id",
        element: <FullVarenuk />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
