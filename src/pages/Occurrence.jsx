import React from "react";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";
import Container from "../components/Container";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./occurrence.module.css";

function Occurrence() {
  // const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const arrOptions = [
    {
      text: "Assistência 24h-Reboque",
      value: "assistência 24h",
    },
    {
      text: "Colisão",
      value: "colisão",
    },
    {
      text: "Furto/Roubo",
      value: "furto/roubo",
    },
  ];

  const arrVehicles = [
    {
      text: "Bugre",
      value: "bugre",
    },
    {
      text: "Conversível",
      value: "conversivel",
    },
    {
      text: "Coupé",
      value: "coupe",
    },
    {
      text: "Crossover",
      value: "crossover",
    },
    {
      text: "Diesel",
      value: "diesel",
    },
    {
      text: "Híbrido",
      value: "hibrido",
    },
    {
      text: "Minivan",
      value: "minivan",
    },
    {
      text: "Picape",
      value: "picape",
    },
    {
      text: "Sedan",
      value: "sedan",
    },
    {
      text: "Suv",
      value: "suv",
    },
    {
      text: "SW",
      value: "sw",
    },
    {
      text: "Van",
      value: "van",
    },
    {
      text: "Wagon",
      value: "wagon",
    },
  ];

  return (
    <Container customClass="centralize">
      <Header children="AVISO DE SINISTRO" />
      <Container customClass="container-infos-occ">
        <Select
          customClass="select-occurrence"
          options={arrOptions}
          onChange={handleChange}
          defaultValue="Tipos de Sinistro"
        />
        <Select
          customClass="select-occurrence"
          options={arrVehicles}
          onChange={handleChange}
          defaultValue="Tipos de Veículo"
        />
        <ImageUpload />
        <textarea className={styles.occ_description} rows="5" cols="33">
          Descrição do ocorrido 
        </textarea>
        <Button customClass="button">Abrir Sinistro</Button>
      </Container>
    </Container>
  );
}

export default Occurrence;
