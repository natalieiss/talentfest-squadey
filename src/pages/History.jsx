import React, { useCallback, useEffect, useState } from "react";
import { getPolicy } from "../lib/firestore";
import { authChange } from "../lib/authentication";
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";
import List from "../components/List";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Input from "../components/Input";

function History() {
  const [policy, setPolicy] = useState([]);
  const [userId, setUserId] = useState();

  const id = `ID-00000324`;
  const estado = "Solicitação Enviada";
  const subEstado = "N/A";
  const preco = 10000;
  const tipo = "Colisão";
  const idPolicy = "";

  const showAllPolicy = useCallback(async () => {
    console.log(userId);
    if (userId) {
      const allPolicy = await getPolicy(userId);
      console.log(allPolicy);
      setPolicy(allPolicy);
    }
  }, [userId]);

  useEffect(() => {
    authChange(setUserId);
    showAllPolicy();
  }, [showAllPolicy]);

  const [isModalVisible, setIsmodalVisible] = useState(false);

  return (
    <Container customClass="containerHistory">
      <Header customClass="centralize" children="HISTÓRICO" />
      <List customClass="historyList">
        {policy.map((apolice) => {
          return <Card key={apolice.apo_codigo} data={apolice} />;
        })}
      </List>
      <Link href="/occurrence" customClass="historyHiperlink">
        Aviso de Sinistro
      </Link>
      
      <Footer />
    </Container>
  );
}
export default History;

/*<Modal
  onClose={() => {
    setIsmodalVisible(false);
  }}
>
  <h1>Prezado Cliente,</h1>
  <p>Resumo de débtos pendentes:</p>
  <ul>
    <li>Mensalidade: R$ 239,00</li>
    <li>Vencimento:</li>
    <li>Status: Pendente</li>
  </ul>
  <h2>Escolha a forma de Pagamento</h2>
  <div className="contentWarning">
    <p>
      Este pagamento não contempla reembolso, após sua efetivação. Por
      favor,confira os dados acima antes de prosseguir.
    </p>
  </div>
  <div className="">
    <h3>Boleto Bancário</h3>
    <p>
      A quitação do débito será realizada após a confirmação do pagamento do
      boleto pelo nosso banco, o que pode levar até 1 ou 2 dias úteis
    </p>
  </div>
  <Button type="button">Efetuar Pagamento</Button>
</Modal>;*/
