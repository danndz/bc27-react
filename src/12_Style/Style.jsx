import React from "react";

import "./style.css";

import css from "./style.module.css";

import scss from "./style.module.scss";

const Style = () => {
  return (
    <div>
      <h1>Style</h1>

      {/* CSS */}
      <h3 className="title">CSS</h3>

      {/* CSS Module */}
      <h3 className={css.title}>CSS Module</h3>
      <div className={css.productItem}>Iphone 13 Pro Max</div>

      {/* SCSS Module */}
      <h3 className={scss.title}>SCSS Module</h3>
      <ul className={scss.list}>
        <li className={scss.item}>Home</li>
        <li className={scss.item}>About</li>
        <li className={scss.item}>Contact</li>
      </ul>

      <li className={scss.item}>Contact</li>
    </div>
  );
};

export default Style;
