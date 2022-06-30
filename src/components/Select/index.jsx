import React from "react";
import styles from "./style.module.css";

function Select({ name, options, onChange, textDefault, customClass }) {
  return (
    <select name={name} defaultValue="" onChange={onChange} className={styles[customClass]}>
      <option value="" disabled>
        {textDefault}
      </option>

      {
        options && options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))
      }
    </select >
  );
}

export default Select;
