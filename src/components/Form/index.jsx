import styles from "./style.module.css";

function Form({ customClass, children, ...props }) {
  return (
    <form className={styles[customClass]} {...props}>
      {children}
    </form>
  );
}

export default Form;