import styles from "./style.module.css";

function Container({customClass, children}){
    return(
      <section className={styles[customClass]}>{children}</section>
    )
}
export default Container;