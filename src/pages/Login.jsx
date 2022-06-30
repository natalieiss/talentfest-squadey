import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Errors from "../components/Errors";
import { userLogin } from "../lib/authentication";
import { MdEmail } from "react-icons/md";

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
      <Logo customClass="logoLogin" />
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
    </>
  );
}
export default Login;
