import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Link from "../components/Link";

function Historic() {
  
  return (
    <Container customClass="centralize">
      <Header customClass="centralize" children="HISTÓRICO"/>
      <Container customClass="cards">
        <Link href="/occurrence" customClass="button">
          Aviso de Sinistro
        </Link>
      </Container>
    </Container>
  );
}
export default Historic;
