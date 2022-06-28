import styles from "./style.module.css"

function Input({type, placeholder, value, onChange}){
    return(
        <input type={type}
        placeholder={placeholder} 
        className={styles.input} 
        value={value}
        onChange={onChange}/>
    )
}
export default Input;