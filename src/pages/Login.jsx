import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Message from "../components/Message";
import Input from "../components/Input";
import Button from "../components/Button";
import Errors from "../components/Errors";
import Footer from "../components/Footer";
import { userLogin } from "../lib/authentication";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then(() => {
        navigate("/history");
      }).catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setError("Senha incorreta.");
        }
        if (errorCode === "auth/invalid-email") {
          setError("Email inválido!");
        }
        if (errorCode === "auth/user-not-found") {
          setError("Usuário não encontrado.");
        }
      })
      ;
  };

  return (
    <>
      <Container customClass="containerSlogan">
        <Logo customClass="logoLogin" />
        <Message customClass="slogan">
          Seguro Autos, <br />você sempre protegida 24 horas !!!
        </Message>
      </Container>
      <Form customClass="formLogin">
        <Input
          type="email"
          placeholder="Email"
          customClass="inputLogin"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="inputLogin"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Errors type="error" message={error} changeSetError={setError} />
        <Button
          type="submit"
          children="ENTRAR"
          customClass="buttonLogin"
          onClick={handleLogin}
        />
      </Form>
      <Footer />
    </>
  );
}
export default Login;
