import styles from "./style.module.css";

function Message({ msg }) {
  return <span className={styles.message}>{msg}</span>;
}
export default Message;