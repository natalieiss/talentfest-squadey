import React from "react";
// import {Link} from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
// import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import {useState} from "react"

function Historic() {
  const navigate = useNavigate();
  
  const handleOccurrance = () => {
    navigate("/Occurrance");
  };
  
  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <Container >
      <Header customClass="centralize" children="HISTÓRICO"/>
      <Button type="button" onClick={()=>{setIsmodalVisible(true)}}>Termos e Condições</Button>
      <Button onClick={handleOccurrance}>Aviso de Sinistro</Button>
      {isModalVisible ? <Modal onClose={()=>{setIsmodalVisible(false)}}>
        <p>Declaro que todas as informações constantes neste formulário para fins de abertura de sinistro, são completas, verdadeiras e corretas em todos os detalhes.Tendo ciência que serão averiguadas e que arcarei com as consequências de afirmações inverídicas.</p></Modal> : null} 
    </Container>
  );
}
export default Historic;
