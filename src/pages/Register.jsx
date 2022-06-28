import React, { useState } from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";
import LinkText from "../components/Link";

function Register() {
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState();

  function createUser(e) {
    e.preventDefault();
    console.log(`Usuário ${rut} foi cadastrado com a senha: ${password}, email: ${email} `);
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email inválido');
      return
    }
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(password)) {
      setError('Senha muito curta, por favor insira uma senha com mais de 6 caracteres');
      return
    }
  }

  /* MOSTRA TODOS OS ERROS
   const validatedForm = () => {
    const regex = /[\w.\-+]+@[\w-]+\.[\w-.]/gi;
    const validatedEmail = regex.test(form.email);
    if (form.name && form.email && validatedEmail && form.password && form.passwordRepeat && form.role) {
      if (form.password !== form.passwordRepeat) {
        return 'As duas senhas não coincidem. Digite-as novamente!';
      } else {
        return '';
      }
    } else if (form.email && validatedEmail && form.password) {
      return '';
    } else if(!form.email || !form.password) {
      return 'Preencha todos os campos!';
    } else {
      return 'Preencha o campo de email corretamente!';
    }
  }
  */


  /* VALIDA E CHAMA O FIREBASE
 const sendForm = (e) => {
    e.preventDefault();
    let validation = validatedForm();
    if (validation === '') {
      createUser(form.name, form.email, form.password, form.role)
      .then((data) => {
        data === '' ? validation = 'Funcionário(a) cadastrado(a)!' : validation = data;
      })
      .then(() => setMessage(validation));
    }
    setMessage(validation);
  }


  */
  return (
    <Container customClass="centralize">
      <Logo customClass="logoLogin" />
      <Form customClass="formLogin">
        <Input
          type="text"
          placeholder="Número do CPF"
          customClass="input"
          name="rut"
          id="rut"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="E-MAIL"
          customClass="input"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          customClass="input"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirmação de Senha"
          customClass="input"
          name="repeatPassword"
          id="repeatPassword"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
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