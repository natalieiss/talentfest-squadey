import React from "react";
import styles from "./style.module.css";

function Select({ options, onChange, customClass, defaultValue}) {
  return (
   
      <select className={styles[customClass]} onChange={onChange}>
        <option selected disabled className={styles[customClass]}>
          {defaultValue}
        </option>
        {options.map((option, i) => (
          <option value={option.value} key={i} className={styles[customClass]} name={option.name}>
            {option.text} 
          </option>
        ))}
      </select>
   
  );
}

export default Select;
