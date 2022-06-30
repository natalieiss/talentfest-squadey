import styles from "./style.module.css";
import Button from "../Button/"

const Modal = ({ children, onClose = () => { } }) => {

  return (
    <div className={styles.DivModal}>
      <div className={styles.DivContainer}>
        <Button customClass="modal-btn" onClick={onClose} type="button">
          Fechar
        </Button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
