import styles from "./style.module.css";

function Button({ type, onClick, customClass, children }) {
  return (
    <button type={type} onClick={onClick} className={styles[customClass]}>
      {children}
    </button>
  );
}
export default Button;
