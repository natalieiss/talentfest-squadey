import styles from "./style.module.css"

function Input({ type, placeholder, customClass }) {
  return (
    <input type={type} placeholder={placeholder} className={styles[customClass]} />
  );
}
export default Input;