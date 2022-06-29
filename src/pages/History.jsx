import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";
import Card from "../components/Card";
import { getPolicy } from '../lib/firestore';
import { auth, authChange } from '../lib/authentication';
// import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function History() {
  const [policy, setPolicy] = useState([]);
  const [userId, setUserId] = useState();

  const id = `ID-00000324`;
  const estado = "Solicitação Enviada";
  const subEstado = "N/A";
  const preco = 10000;
  const tipo = "Colisão";
  const idPolicy = "";
  
  
  const showAllPolicy = useCallback(async() => {
    console.log(userId)
    if(userId) {
      const allPolicy = await getPolicy(userId);
      console.log(allPolicy)
      setPolicy(allPolicy);
    }
    
  }
  ,[userId])
  
  
    useEffect(()=>{
      authChange(setUserId)
      showAllPolicy();
    },[showAllPolicy]);
  
  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <Container customClass="centralize">
      <Header customClass="centralize" children="HISTÓRICO"/>
      <Container customClass="cards">
        <ul>
          {policy.map((apolice, index) => { 
            return(
              <Card key={index} data={apolice} />
            )}
          )}
        </ul>
        <Link href="/occurrence" customClass="button">
          Aviso de Sinistro
        </Link>
      </Container>

      <Button type="button" onClick={()=>{setIsmodalVisible(true)}}>Termos e Condições</Button>
      {/* <Button onClick={handleOccurrance}>Aviso de Sinistro</Button> */}
      {isModalVisible ? <Modal onClose={()=>{setIsmodalVisible(false)}}>
        <p>Declaro que todas as informações constantes neste formulário para fins de abertura de sinistro, são completas, verdadeiras e corretas em todos os detalhes.Tendo ciência que serão averiguadas e que arcarei com as consequências de afirmações inverídicas.</p></Modal> : null} 
    </Container>
  );
}
export default History;
