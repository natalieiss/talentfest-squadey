import React from "react";
// import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Central from "../components/Central";

function Login (){
    return(
        <main>
        <Central>
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
       {/* <Link to="Register">
            Crie sua conta
        </Link> */}
        </Central>
        </main>
    );
}
export default Login;