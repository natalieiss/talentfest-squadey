import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Title from "../Title";

function Header() {
  return (
    <header className={styles.MainHeader}>
      <Logo />
      <Title />
    </header>
  );
}

export default Header;
