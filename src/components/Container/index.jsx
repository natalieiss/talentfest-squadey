import styles from "./style.module.css";

function Central({children}){
    return(
        <div className={styles.central}>{children}</div>
    )
}
export default Central;