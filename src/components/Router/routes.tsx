import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

// import CartEmpty from "../../pages/CartEmpty";
// import FullVarenuk from "../../pages/FullVarenuk";
import Home from "../../pages/Home";
// import NotFound from "../NotFoundBlock";

const Cart = lazy(() => import("../../pages/Cart"));
const FullVarenuk = lazy(() => import("../../pages/FullVarenuk"));
const NotFound = lazy(() => import("../NotFoundBlock"));
const CartEmpty = lazy(() => import("../../pages/CartEmpty"));

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
        element: (
          <Suspense fallback={<div>Йде завантаження корзини</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "cartEmpty",
        element: (
          <Suspense fallback={<div>Йде завантаження корзини</div>}>
            <CartEmpty />
          </Suspense>
        ),
      },
      {
        path: "varenuk/:id",
        element: (
          <Suspense fallback={<div>Йде завантаження вареника</div>}>
            <FullVarenuk />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Йде завантаження помилки</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
