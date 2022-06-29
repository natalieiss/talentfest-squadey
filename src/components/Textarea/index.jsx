import styles from "./style.module.css";

const Textarea = ({ customClass, rows, cols, placeholder, children }) => {
  return (
    <textarea class={styles[customClass]} autocomplete="on" rows={rows} cols={cols} spellcheck="true" wrap="hard" placeholder={placeholder}>{children}</textarea>
  )
}

export default Textarea
