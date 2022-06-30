import React from "react";
import styles from "./style.module.css";

function Select({ options, onChange, defaultValue, customClass, value}) {
  return (
    <select value={value} className={styles[customClass]} onChange={onChange}>
      <option>
        {defaultValue}
      </option>
      {options.map((option, i) => (
        <option value={option.value}key={i} name={option.name}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
