import { FC } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories = [
  "Всі",
  "М'ясні",
  "Вегетаріанські",
  "Гриль",
  "Збиті",
  "Сирні",
];

const Categories: FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
