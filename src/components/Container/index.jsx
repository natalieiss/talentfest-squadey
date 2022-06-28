import styles from "./style.module.css";

function Central({customClass, children}){
    return(
      <section className={styles[customClass]}>{children}</section>
    )
}
export default Central;