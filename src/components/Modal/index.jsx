import styles from "./style.module.css";

const Modal = ({ classContainer, classSubContainer, children }) => {

  return (
    <section className={styles[classContainer]}>
      <div className={styles[classSubContainer]}>
        {children}
      </div>
    </section>
  );
};
export default Modal;
