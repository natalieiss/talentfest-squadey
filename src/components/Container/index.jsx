import styles from "./style.module.css";

function Central({customClass, children}){
    return(
        <div className={styles[customClass]}>{children}</div>
    )
}
export default Central;