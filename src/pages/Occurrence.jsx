import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Form from "../components/Form";
import Select from "../components/Select";
import Button from "../components/Button";
import Textarea from '../components/Textarea';
import Modal from "../components/Modal";
import ImageUpload from "../components/ImageUpload";
import Footer from '../components/Footer';

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

  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <Form customClass="formOccurrence">
        <Select
          customClass="selectOccurrence"
          options={arrOptions}
          onChange={handleChange}
          defaultValue="Tipos de Sinistro"
        />
        <Select
          customClass="selectOccurrence"
          options={arrVehicles}
          onChange={handleChange}
          defaultValue="Tipos de Veículo"
        />
        <ImageUpload onClick={null} progress={null} />
        <Textarea customClass="description" rows="5" cols="70" placeholder="Descreva o ocorrido"></Textarea>
        {isModalVisible ?
          <Modal onClose={() => { setIsmodalVisible(false) }}>
            <Button type="button" onClick={() => { setIsmodalVisible(true) }}>Termos e Condições</Button>
            <p>
              Declaro que todas as informações constantes neste formulário para fins de abertura de sinistro, são completas, verdadeiras e corretas em todos os detalhes.Tendo ciência que serão averiguadas e que arcarei com as consequências de afirmações inverídicas.
            </p>
          </Modal> : null}
        <Button customClass="buttonInternal">Abrir Sinistro</Button>
      </Form>
      <Footer />
    </Container>
  );
}

export default Occurrence;
