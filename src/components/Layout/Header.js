import React from "react";
import mealsImage from "../../assets/mealsimg.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </div>
  );
};
export default Header;
