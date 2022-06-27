import styles from "./style.module.css"

function Button({ type, children }) {
    return (
      <button type={type} className={styles.Button}>{children}</button>
    );
  }
  export default Button;

