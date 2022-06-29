import styles from "./style.module.css";

function Message({ customClass, children }) {
  return <p className={styles[customClass]}>{children}</p>;
}
export default Message;