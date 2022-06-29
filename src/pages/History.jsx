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

  useEffect(() => {
    async function showAllPolicy() {
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
