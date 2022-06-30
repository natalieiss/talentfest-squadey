import styles from "./style.module.css";
import Button from "../Button";
import Input from "../Input";

const Modal = ({ children, onClose = () => { } }) => {

  return (
    <section className={styles.DivModal}>
      <div className={styles.DivConteiner}>
        <Input type="checkbox" />
        <label>Concordo com o termo acima</label>
        <Button className={styles.Close} onClick={onClose} type="button" children="Aceito" />
        {children}
      </div>
    </section>
  );
};
export default Modal;
