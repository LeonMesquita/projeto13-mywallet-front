import {useLocation} from 'react-router-dom';
import NavBar from '../NavBar';
import styled from 'styled-components';
import { useState } from 'react';
import FormButton from '../FormButton';
export default function AddRegisterScreen(){
    const location = useLocation();
    const registerType = location.state.registerType;
    const [value, setValue] = useState('');
    const [description, seDescription] = useState('');

    async function saveRegister(event){
        event.preventDefault();
    }
    return(
        <AddDiv>
        <NavBar>
            <p>{registerType === 'entry' ? 'Nova entrada' : 'Nova saída'}</p>
        </NavBar>
        <form onSubmit={saveRegister}>
            <input type='text' value={value} placeholder='Valor'/>
            <input type='text' value={description} placeholder='Descrição'/>
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