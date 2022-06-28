import styles from "./style.module.css"

function Input({ type, placeholder, value, name, id, onChange }) {
    return (
        <input onChange={onChange} id={id} name={name} value={value} type={type} placeholder={placeholder} className={styles.input} />
    )
}
export default Input;