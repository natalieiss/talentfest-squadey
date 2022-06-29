import Button from "../Button";
import Input from "../Input";
import styles from "./style.module.css";

const Modal = ({ children, onClose = () => { } }) => {

  return (
    <div className={styles.divModal}>
      <div className={styles.divConteiner}>
        <input type="checkbox" />
        <label>Concordo com o termo acima</label>
        <Button className={styles.close} onClick={onClose} type="button" children="Aceito" />
        {children}
      </div>
    </div>
  );
};
export default Modal;
