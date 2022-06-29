import React from 'react';
import styles from "./style.module.css";

const Card = (data) => {
  return (
    <li className={styles.cont}>
      <p>Dados da Apólice</p>
      <ul>
        <li>
          <p>Nº Apólice</p>
          <p>{data.apo_codigo}</p>
        </li>
        <li>
          <p>Franquia (R$)</p>
          <p>{data.apo_preco_franquia}</p>
        </li>
        <li>
          <p>Início de Vigência</p>
          <p>{data.apo_data_inicio}</p>
        </li>
        <li>
          <p>Fim de Vigência</p>
          <p>{data.apo_data_fim}</p>
        </li>
      </ul>
      <hr />

      <p>Dados do Sinistro</p>
      <ul>
        <li>
          <p>ID do Sinistro</p>
          <p>{data.sin_id}</p>
        </li>
        <li>
          <p>Data do Sinistro</p>
          <p>{data.sin_data}</p>
        </li>
        <li>
          <p>Tipo do Sinistro</p>
          <p>{data.sin_tipo}</p>
        </li>
        <li>
          <p>Valor do Sinistro (R$)</p>
          <p>{data.sin_preco}</p>
        </li>
      </ul>
    </li>
  );
};

export default Card;
