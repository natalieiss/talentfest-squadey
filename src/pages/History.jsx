import React from "react";
// import {Link} from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
// import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload/ImageUpload";

function History() {
  const navigate = useNavigate();
  
  const handleOccurrence = () => {
    navigate("/Occurrence");
  };
  
  return (
    <Container >
      <Header customClass="centralize" children="HISTÓRICO"/>
      <Button onClick={handleOccurrence}>Aviso de Sinistro</Button>
      <ImageUpload />
    </Container>
  );
}
export default History;
