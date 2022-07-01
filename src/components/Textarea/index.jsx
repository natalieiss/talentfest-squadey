import styles from "./style.module.css";

const Textarea = ({ customClass, onChange, value, ...props }) => {
  return (
    <textarea
      {...props}
      className={styles[customClass]}
      value={value}
      onChange={onChange}
    ></textarea>
  )
}

export default Textarea
