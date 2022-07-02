import { IoTrashOutline } from "react-icons/io5";
import styled from 'styled-components';
export default function Register({date, description, value, textColor, onPress}){

    return(
        <RegisterDiv textColor={textColor}>
            <button onClick={onPress}>
                <IoTrashOutline>
                </IoTrashOutline>
 
                
            </button>
            <div>
                <p>{date}</p>
                <h3>{description}</h3>                
            </div>
            <h4>{value}</h4>
        </RegisterDiv>
    );
}
const RegisterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    p{
        font-style: normal;
        color: #C6C6C6;
       
    }

    h3{
        font-style: normal;
        color: #000000;
        text-align: baseline;
        margin-left: 10px;
        font-weight: 700;
        word-wrap: break-word;
        overflow: auto;
        padding-top: 15px;
        padding-bottom: 15px;
        
    }

    h4{
        font-style: normal;
        color: ${props => props.textColor};
        text-align: center;
        margin-right: 15px;
        }
    
    div{
        display: flex;
        align-items: center;
        width: 85%;        
        margin-right: 5px;

    }

    &:last-child{
        margin-bottom: 80px;
    }



    button{
        height: 100%;
        width: 0px;
        background: transparent;
        border: none;
        border-radius: 0px 010px 10px 0;
        cursor: pointer;
        transition: width 0.5s;
        color: white;
        font-weight: 900;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

       &:hover{
        cursor: pointer;
        
        button{
            width: 40px;
            background: #f24646;
        }
    } 

`
