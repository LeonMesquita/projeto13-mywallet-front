import { useState, useContext, useEffect } from 'react';
import Context from '../../Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AddButton from '../AddButton';
import { IoIosLogOut, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import NavBar from '../NavBar';


export default function InitialScreen(){
    const navigate = useNavigate();
    const {token, setToken, apiUrl} = useContext(Context);
    const [registers, setRegisters] = useState(0);

    useEffect(async () => {
      //  const promise = await axios.get(`${apiUrl}/user`);
       // console.log(promise.data);


    }, []);
    return <>
    <NavBar>
        <p>Olá, Fulano</p>
        <button><IoIosLogOut /></button>
    </NavBar>
        <RegisterArea>
            {registers === 0 ? 
            <h2>Não há registros de entrada ou saída</h2>
            
             : <></>}

        </RegisterArea>
        <AddRegisterArea>
            <AddButton onPress={() => navigate('/add-register', {state:{registerType: 'entry'}})} buttonIcon={<IoIosAddCircleOutline />} buttonText="Nova entrada"/>
            <Sizedbox />
            <AddButton onPress={() => navigate('/add-register', {state:{registerType: 'out'}})} buttonIcon={<IoIosRemoveCircleOutline />} buttonText="Nova saída"/>
        </AddRegisterArea>
    </>
}



const RegisterArea = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    height: 68vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        text-align: center;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
        width: 45%;
    }
`


const AddRegisterArea = styled.div`
    display: flex;
    height: 20vh;
    width: 90%;
    margin-top: 15px;
    justify-content: space-between;

`

const Sizedbox = styled.div`
    width: 30px;
`