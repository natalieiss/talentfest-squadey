import styles from "./style.module.css";

function Form({ customClass, children }) {
  return (
    <form className={styles[customClass]}>
      {children}
    </form>
  );
}

export default Form;