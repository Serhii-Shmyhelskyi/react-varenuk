import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Всі",
    "М'ясні",
    "Вегетаріанські",
    "Гриль",
    "Збиті",
    "Сирні",
  ];

  const onClickCategory = (index) => {
    return setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? "active" : ""}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
