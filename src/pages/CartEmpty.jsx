import React from "react";
import { Link } from "react-router-dom";

import LogoCart from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div>
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пуста <icon>😕</icon>
            </h2>
            <p>
              Скоріш за все, ви не замовили ще вареники.
              <br />
              Для того, щоб замовити вареники, перейдіть на головну сторінку.
            </p>
            <img src={LogoCart} alt="Empty cart" />
            <Link to={"/"} className="button button--black">
              <span>Вернутися назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
