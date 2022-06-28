import React from "react";
// import {Link} from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";
// import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Historic() {
  const navigate = useNavigate();
  
  const handleOccurrance = () => {
    navigate("/Occurrance");
  };
  
  return (
    <>
      <Header />
      <Title children="HISTÓRICO" />
      <Button onClick={handleOccurrance}>Aviso de Sinistro</Button>
    </>
  );
}
export default Historic;
