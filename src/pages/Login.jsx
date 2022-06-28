import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkText from "../components/Link";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Historic");
  };

  return (
    <Container customClass="centralize">
      <Logo customClass="logoLogin" />
      <Form customClass="formLogin">
        <Input
          type="number"
          placeholder="Número do CPF"
          customClass="input"
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="input"
        />
        <Button
          type="submit"
          children="ENTRAR"
          onClick={handleLogin}
          customClass="button"
        />
        <LinkText href="register" customClass="hiperlink">
          Crie sua conta
        </LinkText>
      </Form>
    </Container>
  );
}
export default Login;