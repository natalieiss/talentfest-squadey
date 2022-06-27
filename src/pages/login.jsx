import React from "react";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

function Login (){
    return(
        <main>
        <Logo />
        <Input 
        type="number"
        placeholder="CPF"
        />
        <Input 
        type="password"
        placeholder="Senha"
        />
        <Button 
        type="submit"
        children="Entrar"
        />
       <Link to="Register" className="hiperlink">
            Crie sua conta
        </Link>
        </main>
    );
}
export default Login;
