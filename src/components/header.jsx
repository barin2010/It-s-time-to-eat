import React from "react";
import css from "./header/header.module.css";

const header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerTop}>
        <p className={css.headerText}>Скидка 10% при заказе от 2х недель</p>
        <p className={css.headerTextUnderline}>Заказать</p>
      </div>
    </header>
  );
};

export default header;
