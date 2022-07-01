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
import Radio from '../components/Radio';
import Message from '../components/Message';

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
  }, [setOccurrence, userId]);

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
        <Modal classContainer="containerGeneralHistory" classSubContainer="subContainerHistory">
          <Button type="button" onClick={() => setIsmodalVisible(false)} customClass="closeModal">
            Fechar
          </Button>
          <Container customClass="textModalHistory">
            <Message customClass="modalHistory">
              <h1>Prezado Cliente, atualize seus débitos para prosseguir!</h1>
              <h2>Resumo de débitos pendentes:</h2>
              <ul>
                <li><strong>Mensalidade:</strong> R$ 239,00</li>
                <li><strong>Vencimento:</strong> 10/06/2020</li>
                <li><strong>Status:</strong> Pendente</li>
              </ul>
              <h2>Escolha a forma de pagamento:</h2>
              <Radio
                classLabel='labelRadioPayment'
                name='payment'
                text={["Boleto Bancário"]}
                options={["payment"]}
                onChange={null}
              />
              <p>
                Este pagamento não contempla reembolso, após sua efetivação. Por
                favor,confira os dados acima antes de prosseguir.
                <br /><br />
                A quitação do débito será realizada após a confirmação do
                pagamento do boleto pelo nosso banco, o que pode levar até 1 ou 2
                dias úteis
              </p>
            </Message>
          </Container>
          <Button type="button" onClick={handlePayment} customClass="buttonHistory">
            Efetuar Pagamento
          </Button>
        </Modal>
      )}
    </>
  );
}
export default History;
