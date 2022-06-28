import React from "react";
import styles from "./style.module.css";

function Select({children}) {
  return (
    <section className={styles.SelectSection}>
      <select className={styles.Selects}>
        <option value="" selected disabled>
          Tipo de Ocorrência
        </option>
        <option className={styles.SelectOption} value="">
          Colisão
        </option>
        <option className={styles.SelectOption} value="">
          Assistência 24h-Reboque
        </option>
        <option className={styles.SelectOption} value="">
          Furto/Roubo
        </option>
      </select>
    </section>
  );
}

export default Select;
