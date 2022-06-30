import styles from "./style.module.css";

const Textarea = ({ customClass, rows, cols, placeholder, value, maxlength }) => {
  return (
    <textarea className={styles[customClass]} rows={rows} cols={cols} placeholder={placeholder} value={value} maxLength={maxlength} required></textarea>
  )
}

export default Textarea
