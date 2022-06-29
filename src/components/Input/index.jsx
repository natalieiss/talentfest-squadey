import styles from "./style.module.css"

function Input({ type, placeholder, value, name, id, onChange, customClass }) {
  return (
    <input
      onChange={onChange}
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={styles[customClass]}
    />
  )
}
export default Input;