import styles from "./style.module.css"

function Button({ type, children, onClick }) {
    return (
      <button type={type} className={styles.Button} onClick={onClick}  >{children}</button>
    );
  }
  export default Button;

