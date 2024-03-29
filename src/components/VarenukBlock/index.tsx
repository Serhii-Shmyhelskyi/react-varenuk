import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemById } from "../../redux/cart/selectors";
import { addItem } from "../../redux/cart/slice";
import { CartItem } from "../../redux/cart/types";

const typeNames: string[] = ["ніжні", "гострі"];

type VarenukBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const VarenukBlock: FC<VarenukBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="varenuk-block-wrapper">
      <div className="varenuk-block">
        <Link to={`varenuk/${id}`}>
          <img
            width={260}
            height={260}
            className="varenuk-block__image"
            src={imageUrl}
            alt="Varenuk"
          />
        </Link>
        <h4 className="varenuk-block__title">{title}</h4>
        <div className="varenuk-block__selector">
          <ul>
            {types.map((typeId, i) => (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={activeType === i ? "active" : ""}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}>
                {size} шт.
              </li>
            ))}
          </ul>
        </div>
        <div className="varenuk-block__bottom">
          <div className="varenuk-block__price">від {price} ₴</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
