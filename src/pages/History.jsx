import React from "react";
// import {Link} from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
// import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Historic() {
  const navigate = useNavigate();
  
  const handleOccurrance = () => {
    navigate("/Occurrance");
  };
  
  return (
    <Container >
      <Header customClass="centralize" children="HISTÓRICO"/>
      <Button onClick={handleOccurrance}>Aviso de Sinistro</Button>
    </Container>
  );
}
export default Historic;
