import React from "react";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";
import ImageUpload from "../components/ImageUpload/ImageUpload";

function Occurrence() {
  return (
    <>
      <Header children="AVISO DE SINISTRO"/>
      <Select />
      <ImageUpload/>
      <Button>Abrir Sinistro</Button>
    </>
  );
}

export default Occurrence;
