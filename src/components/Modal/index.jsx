import styles from "./style.module.css";
import Button from "../Button/"

const Modal = ({ children, onClose = () => { } }) => {

  return (
    <section className={styles.DivModal}>
      <div className={styles.DivConteiner}>
        <Button className={styles.Close} onClick={onClose} type="button" children="Fechar"/>
        {children}
      </div>
    </section>
  );
};
export default Modal;
