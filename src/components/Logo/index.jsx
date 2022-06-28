import logo from "../../img/logo_EY_white.svg";
import styles from "./style.module.css";

function Logo({customClass}) {
  return (
    <img src={logo} alt="logo" className={styles[customClass]}></img>
  )
};
export default Logo;