import React from "react";

function Select() {
  return (
    <section className="occurance-selects">
      <select className="status-btn">
        <option value="occurrance" selected disabled>
          Tipo de Ocorrência
        </option>
        <option className="select-occurance" value=""></option>
        <option className="select-occurance" value=""></option>
        <option className="select-occurance" value=""></option>
      </select>
    </section>
  );
}

export default Select;
