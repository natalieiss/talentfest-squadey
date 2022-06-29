import styles from "./style.module.css"

function Input({ customClass, ...props }) {
  return (
    <input
      {...props}
      className={styles[customClass]}
    />
  )
}
export default Input;