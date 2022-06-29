import React from "react";
import styles from "./style.module.css";

function Select({ options, onChange, customClass, defaultValue}) {
  return (
    <section className={styles.selectsSection}>
      <select className={styles[customClass]} onChange={onChange}>
        <option  className={styles[customClass]}>
          {defaultValue}
        </option>
        {options.map((option, i) => (
          <option value={option.value} key={i} className={styles[customClass]} name={option.name}>
            {option.text} 
          </option>
        ))}
      </select>
    </section>
  );
}

export default Select;
