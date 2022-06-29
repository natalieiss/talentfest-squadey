import React from 'react';
import styles from "./style.module.css";

const Card = ({data}) => {
  console.log(data)
  return (
    <li className={styles.container}>
      <p className={styles.title}>Dados da Apólice</p>
      <ul className={styles.table}>
        <li>
          <p className={styles.subTitle}>Nº Apólice</p>
          <p className={styles.text}>{data.apo_codigo}AAAAA</p>
        </li>
        <li>
          <p className={styles.subTitle}>Franquia (R$)</p>
          <p className={styles.text}>{data.apo_preco_franquia}AAAA</p>
        </li>
        <li>
          <p>Início de Vigência</p>
          <p>{data.apo_data_inicio.seconds}</p>
        </li>
        <li>
          <p>Fim de Vigência</p>
          <p>{data.apo_data_fim.seconds}</p>

        </li>
      </ul>
      <hr />

      <p className={styles.title}>Dados do Sinistro</p>
      <ul className={styles.table}>
        <li>
          <p className={styles.subTitle}>ID do Sinistro</p>
          <p className={styles.text}>{data.sin_id}AAA</p>
        </li>
        <li>
          <p className={styles.subTitle}>Data do Sinistro</p>
          <p className={styles.text}>{data.sin_data}AAA</p>
        </li>
        <li>
          <p className={styles.subTitle}>Tipo do Sinistro</p>
          <p className={styles.text}>{data.sin_tipo}AAA</p>
        </li>
        <li>
          <p className={styles.subTitle}>Valor do Sinistro (R$)</p>
          <p className={styles.text}>{data.sin_preco}AAA</p>
        </li>
      </ul>
    </li>
  );
};

export default Card;
