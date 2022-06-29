import styles from "./style.module.css";

const Textarea = ({ customClass, rows, cols, placeholder, children }) => {
  return (
    <textarea className={styles[customClass]} rows={rows} cols={cols} placeholder={placeholder}>
      {children}
    </textarea>
  )
}

export default Textarea
