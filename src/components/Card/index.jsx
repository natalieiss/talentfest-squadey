import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../Button";

const Card = ({ data, handleClick }) => {
  const navigate = useNavigate()
  const handleOccurrence = () => {
    data.apo_status ? navigate("/occurrence") : navigate("/history")
  }

  return (
    <>
      <li className={styles.container}>
        <p className={styles.title}>Dados da Apólice</p>
        <ul className={styles.table}>
          <li>
            <p className={styles.subTitle}>Nº Apólice</p>
            <p className={styles.text}>{data.apo_codigo}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Franquia (R$)</p>
            <p className={styles.text}>{data.apo_preco_franquia}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Início de Vigência</p>
            <p className={styles.text}>{data.apo_data_inicio.seconds}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Fim de Vigência</p>
            <p className={styles.text}>{data.apo_data_fim.seconds}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Status do Pagamento</p>
            {data.apo_status ? (
              <p className={styles.text}>Pago</p>
            ) : (
              <>
                <Button onClick={handleClick} customClass="payment">
                  Pendente - Clique aqui pra<br /> regularizar
                </Button>
              </>
            )}
          </li>
        </ul>
        <hr />

        <p className={styles.title}>Dados do Sinistro</p>
        <ul className={styles.table}>
          <li>
            <p className={styles.subTitle}>ID do Sinistro</p>
            <p className={styles.text}>{"ID-785746390"}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Data do Sinistro</p>
            <p className={styles.text}>{"30/06/2022"}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Tipo do Sinistro</p>
            <p className={styles.text}>{"Colisão"}</p>
          </li>
          <li>
            <p className={styles.subTitle}>Estado e Sub-estado</p>
            <p className={styles.text}>{"Pedido em Estudo"}{"N/A"}</p>
          </li>
        </ul>
      </li>

      <Button type="button" onClick={handleOccurrence} customClass="buttonCard">
        Aviso de Sinistro
      </Button>
    </>
  );
};

export default Card;
