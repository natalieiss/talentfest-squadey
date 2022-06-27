import React from "react";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Register() {
    return (
        <main>
            <Logo />
            <Input
                type="text"
                placeholder="RUT"
            />
            <Input
                type="text"
                placeholder="E-MAIL"
            />
            <Input
                type="password"
                placeholder="Senha"
            />
            <Input
                type="password"
                placeholder="Confirmação de Senha"
            />
            <Button type="submit" onClick children="Entrar" />
        </main>
    )
}

export default Register;