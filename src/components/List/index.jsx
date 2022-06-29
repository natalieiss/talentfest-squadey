import styles from "./style.module.css";

const List = ({ customClass, children }) => {
  return (
    <ul className={styles[customClass]}>
      {children}
    </ul>
  )
}

export default List
