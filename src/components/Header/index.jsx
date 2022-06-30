import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../lib/authentication";
import { FaSignInAlt } from "react-icons/fa";
import Logo from "../Logo";
import styles from "./style.module.css";
import Button from "../Button"


function Header({ children }) {
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
      <Button type="button" onClick={goOut} customClass="logout">
        <FaSignInAlt size="26px" />
      </Button>
    </header>
  );
}

export default Header;
