import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Button from "../components/Button";

function Occurrence() {
  return (
    <>
      <Header />
      <Title children="AVISO DE SINISTRO" />
      <Button>Abrir Sinistro</Button>
    </>
  );
}

export default Occurrence;
