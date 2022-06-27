import styles from "./Register.module.css"
import { useState } from 'react'
import React from "react";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Register() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${rut} foi cadastrado com a senha: ${password}, email: ${email} `)
    }

    const [password, setPassword] = useState("")
    const [rut, setRut] = useState("")
    const [email, setEmail] = useState("")

    return (
        <main className={styles.form}>
            <form onSubmit={cadastrarUsuario}>
                <Logo />
                <Input
                    type="text"
                    placeholder="RUT"
                    onChange={(e) => setRut(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-MAIL"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirmação de Senha"
                />
                <Button type="submit" onClick="" children="Entrar" />
            </form>
        </main>
    )
}

export default Register;