import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Home from "../../pages/Home";
import { CartEmpty } from "../CartEmpty";

const Cart = lazy(
  () => import(/* webpackChunkName: "Cart"*/ "../../pages/Cart")
);
const FullVarenuk = lazy(
  () => import(/* webpackChunkName: "FullVarenuk"*/ "../../pages/FullVarenuk")
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "FullVarenuk"*/ "../../pages/NotFound")
);

export const router = createBrowserRouter([
  {
    path: "react-varenuk",
    // react-varenuk
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Йде завантаження корзини</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "cartEmpty",
        element: <CartEmpty />,
      },
      {
        path: "varenuk/:id",
        element: (
          <Suspense fallback={<div>Йде завантаження вареників</div>}>
            <FullVarenuk />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Йде завантаження 404</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
