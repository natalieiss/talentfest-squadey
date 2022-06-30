import React, { useCallback, useEffect, useState } from "react";
import { getOccurrence, getPolicy } from "../lib/firestore";
import { authChange } from "../lib/authentication";
import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";

function History() {
  const [policy, setPolicy] = useState([]);
  const [setOccurrence] = useState([]);
  const [userId, setUserId] = useState();
  const [isModalVisible, setIsmodalVisible] = useState(false);

  const handleClick = () => {
    setIsmodalVisible(true);
  };

  const showAllPolicy = useCallback(async () => {
    console.log(userId);
    if (userId) {
      const allPolicy = await getPolicy(userId);
      const allOccurrence = await getOccurrence(userId);
      console.log(allPolicy, allOccurrence);
      setPolicy(allPolicy);
      setOccurrence(allOccurrence);
    }
  }, [userId]);

  useEffect(() => {
    authChange(setUserId);
    showAllPolicy();
  }, [showAllPolicy]);

  const handlePayment = () => {
    const arrayPolicy = [...policy];
    setPolicy(
      arrayPolicy.map((apolice) => {
        if (apolice.apo_status === false) {
          return { ...apolice, apo_status: true };
        } else {
          return apolice;
        }
      })
    );
    setIsmodalVisible(false);
  };


  return (
    <>
      <Container customClass="containerHistory">
        <Header customClass="centralize" children="HISTÓRICO" />
        <List customClass="historyList">
          {policy.map((apolice) => {
            return (
              <Card
                handlePayment={() => handlePayment(apolice.apo_codigo)}
                key={apolice.apo_codigo}
                data={apolice}
                handleClick={handleClick}
              />
            );
          })}
      
        </List>
        <Footer />
      </Container>
      {isModalVisible && (
        <Modal
          onClose={() => {
            setIsmodalVisible(false);
          }}
        >
          <h1>Prezado Cliente, atualize seus débitos para prosseguir</h1>
          <p>Resumo de débtos pendentes:</p>
          <ul>
            <li>Mensalidade: R$ 239,00</li>
            <li>Vencimento: 10/06/2020</li>
            <li>Status: Pendente</li>
          </ul>
          <h2>Escolha a forma de Pagamento</h2>
          <div className="contentWarning">
            <p>
              Este pagamento não contempla reembolso, após sua efetivação. Por
              favor,confira os dados acima antes de prosseguir.
            </p>
          </div>

          <Input type="radio" value="Boleto Bancário" />
          <p>Boleto Bancário</p>
          <div>
            <p>
              A quitação do débito será realizada após a confirmação do
              pagamento do boleto pelo nosso banco, o que pode levar até 1 ou 2
              dias úteis
            </p>
          </div>
          <Button onClick={handlePayment} customClass="buttonInternal">
            {" "}
            Efetuar Pagamento{" "}
          </Button>
        </Modal>
      )}
    </>
  );
}
export default History;
