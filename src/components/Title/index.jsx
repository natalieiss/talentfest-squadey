import React from "react";
import styles from "./style.module.css";

function Title({children}) {
  return (
    <div>
      <p className={styles.PageTitle}>{children}</p>
    </div>
  );
}

export default Title;
