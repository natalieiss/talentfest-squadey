import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin, auth } from "../lib/authentication";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

export default () => {
const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const actionLogin = async (e) => {
    e.preventDefault();
    userLogin(auth, email, password)
        .then(() => {
            
        navigate("/Register");
        })
        .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
            alert("Senha incorreta.");
        }
        if (errorCode === "auth/invalid-email") {
            alert("Insira um email válido.");
        }
        if (errorCode === "auth/user-not-found") {
            alert("Usuário não encontrado.");
        }});
    } ;

    return (
    <main>
        <Logo />
        <form>
            <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={actionLogin} type="submit" children="Entrar" />
        </form>
        <Link to="Register" className="hiperlink">
        Crie sua conta
        </Link>
    </main>);
};

//export default Login;
