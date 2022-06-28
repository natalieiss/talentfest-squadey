import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkText from "../components/Link";
import {userLogin} from "../lib/authentication"


function Login() {
  const navigate = useNavigate();



  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    userLogin(email, password)
        .then(() => {
            
        navigate("/Historic");
        })}

  return (
    <Container customClass="centralize">
      <Logo customClass="logoLogin" />
      <Form customClass="formLogin">
        <Input
          type="email"
          placeholder="email"
          customClass="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="input"
          onChange={(e) => setPassword(e.target.value)}
          
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
