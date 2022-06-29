import Form from '../styled/Form';
import LoginDiv from '../styled/LoginDiv';
import { useState } from 'react';
import FormButton from './FormButton';
import { Link, useNavigate } from 'react-router-dom';
export default function SignInScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    function submitLogin(event){
        event.preventDefault();
    }
    return(
        <LoginDiv>
            <h1>MyWallet</h1>
            <Form onSubmit={submitLogin}>
                <input placeholder='Nome' type="email" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='Senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder='Confirme a senha' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <FormButton buttonText="Entrar"/>
            </Form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>



        </LoginDiv>
    )
}