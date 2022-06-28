import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

function Login (){

const navigate = useNavigate();

const handleLogin = () => {
    navigate("/Historic")
  };
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
        onClick= {handleLogin}
        />
       <Link to="Register" className="hiperlink">
            Crie sua conta
        </Link>
        </main>
    );
}
export default Login;