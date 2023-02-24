import React from "react";

export default function Categories({ value, onChangeCategory }) {
  const categories = [
    "Всі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Збиті",
    "Сирні",
  ];

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
}
