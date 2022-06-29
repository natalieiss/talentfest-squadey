import icon from "../../assets/image/icon-upload.png";
import styles from "./style.module.css";

function ImageUpload({ onClick, progress }) {
  return (
    <section className={styles.containerPhoto}>
      <label className={styles.labelPhoto}>
        <input type="file" className={styles.input} accept="image/png, image/jpeg, image/jpg" />
        <p className={styles.textPhoto}>
          <img src={icon} alt="Ícone de adicionar imagem" className={styles.iconPhoto} />
          Selecionar Imagem do Veículo
        </p>
      </label>
      <p className={styles.textProgress}>Enviando {progress} %</p>
    </section>
  );
}

export default ImageUpload;