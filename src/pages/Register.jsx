import React, { useState } from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";
import LinkText from "../components/Link";

function Register() {
  const [password, setPassword] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");

  function createUser(e) {
    e.preventDefault();
    console.log(`Usuário ${rut} foi cadastrado com a senha: ${password}, email: ${email} `);
  }

  return (
    <Container customClass="centralize">
      <Logo customClass="logoLogin" />
      <Form customClass="formLogin">
        <Input
          type="text"
          placeholder="Número do CPF"
          customClass="input"
          value="RUT"
          onChange={(e) => setRut(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-MAIL"
          customClass="input"
          value="E-MAIL"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="input"
          value="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmação de Senha"
          customClass="input"
        />
        <Button
          type="submit"
          children="CADASTRAR"
          onClick={createUser}
          customClass="button" />
        <LinkText href="register" customClass="hiperlink">
          Já tem uma conta?
        </LinkText>
      </Form>
    </Container>
  )
}

export default Register;