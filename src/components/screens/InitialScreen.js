import { useState, useContext, useEffect } from 'react';
import Context from '../../Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AddButton from '../AddButton';
import { IoIosLogOut, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import NavBar from '../NavBar';
import Register from '../Register';
import RegisterFooter from '../RegisterFooter';

export default function InitialScreen(){
    const navigate = useNavigate();
    const {token, setToken, apiUrl, authorization} = useContext(Context);
    const [userName, setUserName] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [registers, setRegisters] = useState([]);


    useEffect(async () => {
       try{
        const promise = await axios.get(`${apiUrl}/get-registers`, authorization);
        setRegisters(promise.data.registers);
        setUserName(promise.data.userName);
        calcTotalMoney(promise.data.registers);
       }catch(error){

       }
    }, []);

    function calcTotalMoney(registers){
        let sum = 0;
        registers.map((register) => {
            let value =  Number(register.value);
            if(register.registerType === 'out') value *= -1;
            sum += value
        });
        setTotalMoney(sum);
    }
    return <>
    <NavBar>
        <p>Olá, {userName}</p>
        <button><IoIosLogOut /></button>
    </NavBar>
        <RegisterArea>
            {registers.length === 0 ? 
            <h2>Não há registros de entrada ou saída</h2>
            
             : <RegistersDiv>
                {registers.map((register) => 
                    <Register date={register.date} description={register.description}
                    value={register.value} textColor= {register.registerType === "entry" ? "#03AC00" : "#C70000"}/>)}
                </RegistersDiv>}
            <RegisterFooter value={totalMoney} textColor={totalMoney >= 0 ? "#03AC00" : "#C70000"}/>
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
    position: relative;

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

const RegistersDiv = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    
    
    
   
`

//    position: absolute;
//bottom: 0;

//