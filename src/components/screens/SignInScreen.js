import LoginDiv from '../../styled/LoginDiv';
import { useState, useContext } from 'react';
import FormButton from '../FormButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../../Context';

export default function SignInScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const {token, setToken, apiUrl} = useContext(Context);
    const navigate = useNavigate();
    const [placeholder, setPlaceholder] = useState('Confirme a senha');

   async function submitLogin(event){
        event.preventDefault();
        if(password === confirmPassword){
            try{
                const promise = await axios.post(`${apiUrl}sign-in`,
                {
                    name,
                    email,
                    password
                });
                setToken(promise.data);
            
                navigate('/');           
            }
            catch{
                console.log('error');

            }            
        }
        else{
            setConfirmPassword('');
            setPlaceholder("Senha inválida!");

        }

 

    }
    return(
        <LoginDiv>
            <h1>MyWallet</h1>
            <form onSubmit={submitLogin}>
                <input placeholder='Nome' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='Senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder={placeholder} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <FormButton buttonText="Cadastrar"/>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>



        </LoginDiv>
    )
}