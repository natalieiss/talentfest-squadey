import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../lib/authentication"
import Logo from "../Logo";
import Button from '../Button';
import styles from "./style.module.css";

function Header({children}) {
  const navigate = useNavigate();

  const goOut = async () => {
    await logout()
      .then(() => {
        navigate("/");
      });
  }
  
  return (
    <header className={styles.mainHeader}>
      <Logo customClass="logo" />
      <p className={styles.pageTitle}>{children}</p>
      <Button
        type="button"
        children="SAIR"
        customClass="logout"
        onClick={goOut}
      />
    </header>
  );
}

export default Header;
