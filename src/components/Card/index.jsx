import React from 'react';
import styles from "./style.module.css";

const Card = ({ data }) => {
  console.log(data)
  return (
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
      </ul>
      <hr />

      <p className={styles.title}>Dados do Sinistro</p>
      <ul className={styles.table}>
        <li>
          <p className={styles.subTitle}>ID do Sinistro</p>
          <p className={styles.text}>{data.sin_id}</p>
        </li>
        <li>
          <p className={styles.subTitle}>Data do Sinistro</p>
          <p className={styles.text}>{data.sin_data}</p>
        </li>
        <li>
          <p className={styles.subTitle}>Tipo do Sinistro</p>
          <p className={styles.text}>{data.sin_tipo}</p>
        </li>
        <li>
          <p className={styles.subTitle}>Valor do Sinistro (R$)</p>
          <p className={styles.text}>{data.sin_preco}</p>
        </li>
      </ul>
    </li>
  );
};

export default Card;
