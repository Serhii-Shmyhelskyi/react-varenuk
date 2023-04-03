import { FC } from "react";
import { Link } from "react-router-dom";

import LogoCart from "../assets/img/empty-cart.png";

export const CartEmpty: FC = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пуста <span>😕</span>
          </h2>
          <p>
            Скоріш за все, ви не замовили ще вареники.
            <br />
            Для того, щоб замовити вареники, перейдіть на головну сторінку.
          </p>
          <img src={LogoCart} alt="Empty cart" />
          <Link to="/react-varenuk" className="button button--black">
            <span>Повернутися назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
