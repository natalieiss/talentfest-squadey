import React, { useCallback, useEffect, useState } from "react";
import { getPolicy } from '../lib/firestore';
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";
import List from "../components/List";
import Card from "../components/Card";
import Footer from '../components/Footer';

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

  return (
    <Container customClass="containerHistory">
      <Header customClass="centralize" children="HISTÓRICO" />
      <List customClass="historyList">
        {policy.map((apolice) => {
          return (
            <Card key={apolice.apo_codigo} data={apolice} />
          )
        }
        )}
      </List>
      <Link href="/occurrence" customClass="historyHiperlink">
        Aviso de Sinistro
      </Link>
      <Footer />
    </Container>
  );
}
export default History;
