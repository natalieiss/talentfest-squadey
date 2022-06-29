import React, { useEffect, useState } from "react";
import { getPolicy } from '../lib/firestore';
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";
import List from "../components/List";
import Card from "../components/Card";
import Footer from '../components/Footer';

function History() {
  const [policy, setPolicy] = useState([]);
  //const [userId, setUserId] = useState();

  const id = `ID-00000324`;
  const estado = "Solicitação Enviada";
  const subEstado = "N/A";
  const preco = 10000;
  const tipo = "Colisão";
  const idPolicy = "";

  //authChange(() => setUserId(auth.currentUser.uid));

  useEffect(() => {
    async function showAllPolicy() {
      // authChange(async (logged) => {
      //   if(logged) {
      //     const allPolicy = await getPolicy(auth.currentUser.uid);
      //     return setPolicy(allPolicy);
      //   }
      // })
      const allPolicy = await getPolicy();
      setPolicy(allPolicy);
    };
    showAllPolicy();
  }, []);

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
