import styles from "./style.module.css"

function Button({ type, children, hef }) {
    return (
      <button type={type} className={styles.Button} hef={hef}>{children}</button>
    );
  }
  export default Button;

