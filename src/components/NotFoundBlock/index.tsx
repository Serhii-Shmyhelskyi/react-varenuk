import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>
        Нажаль данної сторінки не існує на цьому сайті
      </p>
    </div>
  );
};

export default NotFound;
