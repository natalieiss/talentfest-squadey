import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Register() {

    function createUser(e) {
        e.preventDefault()
        console.log(`Usuário ${rut} foi cadastrado com a senha: ${password}, email: ${email} `)
    }

    const [password, setPassword] = useState("")
    const [rut, setRut] = useState("")
    const [email, setEmail] = useState("")

    return (
        <main>
            <Logo />
            <form onSubmit={createUser}>
                <Input
                    type="text"
                    placeholder="RUT"
                    value="RUT"
                    onChange={(e) => setRut(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-MAIL"
                    value="E-MAIL"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirmação de Senha"
                />
                <Button type="submit" children="Cadastrar" />
            </form>
            <Link to="/" className="hiperlink">
                Já tem uma conta?
            </Link>
        </main>
    )
}

export default Register;