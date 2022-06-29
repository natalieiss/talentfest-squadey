import React from "react";
import styles from "./style.module.css";

function Select({ options, onChange, defaultValue, customClass }) {
  return (
    <section className={styles.selectsSection}>
      <select className={styles[customClass]} onChange={onChange}>
        <option value="" selected disabled className={styles[customClass]}>
          {defaultValue}
        </option>
        {options.map((option, i) => (
          <option value={option.value} key={i} className={styles[customClass]}>
            {option.text}
          </option>
        ))}
      </select>
    </section>
  );
}

export default Select;
