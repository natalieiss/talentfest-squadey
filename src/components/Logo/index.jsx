import logo from "../../assets/image/logo_EY_white.svg";
import styles from "./style.module.css";

function Logo({customClass}) {
  return (
    <img src={logo} alt="logo" className={styles[customClass]} />
  )
};
export default Logo;