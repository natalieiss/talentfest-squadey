import styles from "./style.module.css"

function Input({ type, placeholder }) {
  return (
    <input type={type} placeholder={placeholder} className={styles.Input} />
  );
}
export default Input;