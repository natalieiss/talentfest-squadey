import styles from "./style.module.css";

const Photo = ({ src, text }) => {
  return (
    <label className={styles.labelPhoto}>
      <input type="file" accept="image/png, image/jpeg, image/jpg" />
      <p className={styles.textPhoto}>
        <img src={src} alt="Ícone de adicionar imagem" className={styles.iconPhoto} />
        {text}
      </p>
    </label>
  )
}

export default Photo;
