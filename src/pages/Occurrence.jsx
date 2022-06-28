import React from "react";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";

function Occurrence() {
  return (
    <>
      <Header children="AVISO DE SINISTRO"/>
      <Select />
      <Button>Abrir Sinistro</Button>
    </>
  );
}

export default Occurrence;
