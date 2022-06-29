import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../lib/authentication";
import Logo from "../Logo";
import styles from "./style.module.css";
import { FaSignInAlt } from "react-icons/fa";

function Header({ children }) {
  const navigate = useNavigate();

  const goOut = async () => {
    await logout().then(() => {
      console.log("clicou");
      navigate("/");
    });
  };

  return (
    <header className={styles.mainHeader}>
      <Logo customClass="logo" />
      <p className={styles.pageTitle}>{children}</p>
      <div className="logout">
      <button>
        <FaSignInAlt size="26px" margin-rigth="0px" onClick={goOut} />
      </button>
    </div>
    </header>
  );
}

export default Header;
