import {useLocation, Link, useNavigate} from 'react-router-dom';
import NavBar from '../NavBar';
import styled from 'styled-components';
import FormButton from '../FormButton';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import Context from '../../Context';

export default function AddRegisterScreen(){
    const navigate = useNavigate();
    const {token, setToken, apiUrl, authorization} = useContext(Context);
    const location = useLocation();
    const registerType = location.state.registerType;
    const [value, setValue] = useState('');
    const [description, seDescription] = useState('');
    async function saveRegister(event){
        event.preventDefault();

        try{
            const promise = axios.post(`${apiUrl}/add-register`, {
                value,
                description,
                registerType
            },
            authorization);

            navigate('/initial-screen');


        }catch(error){

        }
    }
    return(
        <AddDiv>
        <NavBar>
            <p>{registerType === 'entry' ? 'Nova entrada' : 'Nova saída'}</p>
        </NavBar>
        <form onSubmit={saveRegister}>
            <input type='number' required={true} value={value} placeholder='Valor' onChange={(e) => setValue(e.target.value)}/>
            <input type='text' required={true} value={description} placeholder='Descrição' onChange={(e) => seDescription(e.target.value)}/>
            <FormButton buttonText={registerType === 'entry' ? 'Salvar entrada' : 'Salvar saída'}/>
        </form>
        </AddDiv>
    );
}


const AddDiv = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;

    form{
        margin-top: 20px;
    }

`