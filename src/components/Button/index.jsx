import styles from "./style.module.css"

function Button({ type, children, onClick }) {
    return (
      <button onClick={onClick} type={type} className={styles.Button}>{children}</button>
    );
  }
  export default Button;

