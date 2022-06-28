import styles from "./style.module.css"

<<<<<<< HEAD
function Input({ type, placeholder, value, name, id, onChange }) {
    return (
        <input onChange={onChange} id={id} name={name} value={value} type={type} placeholder={placeholder} className={styles.input} />
    )
=======
function Input({ type, placeholder, customClass }) {
  return (
    <input type={type} placeholder={placeholder} className={styles[customClass]} />
  );
>>>>>>> origin/main
}
export default Input;