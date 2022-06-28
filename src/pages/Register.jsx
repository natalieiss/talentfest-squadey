import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Button from "../components/Button";

function Register() {

    const [password, setPassword] = useState('')
    const [rut, setRut] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState();

    function createUser(e) {
        e.preventDefault()
        console.log(`Usuário ${rut} foi cadastrado com a senha: ${password}, email: ${email} `)
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email inválido')
            return
        }
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(password)) {
            setError('Senha muito curta, por favor insira uma senha com mais de 6 caracteres')
            return
        }
    }

    return (
        <main>
            <Logo />
            <form onSubmit={createUser}>
                <Input
                    type="text"
                    placeholder="RUT"
                    name="rut"
                    id="rut"
                    value={rut}
                    onChange={(e) => setRut(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="E-MAIL"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirmação de Senha"

                />
                <Button type="submit" children="Cadastrar" onClick={createUser} />
            </form>
            <Link to="/" className="hiperlink">
                Já tem uma conta?
            </Link>
        </main>
    )
}

export default Register;