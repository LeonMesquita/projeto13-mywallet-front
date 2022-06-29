import Form from '../styled/Form';
import LoginDiv from '../styled/LoginDiv';
import { useState } from 'react';
import FormButton from './FormButton';
import { Link, useNavigate } from 'react-router-dom';
export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function submitLogin(event){
        event.preventDefault();
        console.log(email)
    }
    return(
        <LoginDiv>
            <h1>MyWallet</h1>
            <Form onSubmit={submitLogin}>
                <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='Senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FormButton buttonText="Entrar"/>
            </Form>
            <Link to="/signin">
                Primeira vez? Cadastre-se!
            </Link>

        </LoginDiv>
    )
}