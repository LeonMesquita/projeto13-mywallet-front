//import Form from '../styled/Form';
import LoginDiv from '../styled/LoginDiv';
import { useState, useContext } from 'react';
import Context from '../Context';
import FormButton from './FormButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {token, setToken, apiUrl} = useContext(Context);

    async function submitLogin(event){
        event.preventDefault();
        console.log(`${apiUrl}/login`);

        try{
            const promise = await axios.post(`${apiUrl}/login`, {
                email,
                password
            });
            setToken(promise.data);
            console.log(promise.data)
            navigate('/initial-screen');
        }
        catch(error){
            console.log(error);
        }
        
    }
    return(
        <LoginDiv>
            <h1>MyWallet</h1>
            <form onSubmit={submitLogin}>
                <input placeholder=' E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder=' Senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FormButton buttonText="Entrar"/>
            </form>
            <Link to="/sign-in">
                Primeira vez? Cadastre-se!
            </Link>

        </LoginDiv>
    )
}