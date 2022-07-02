import styled from 'styled-components';
export default function Register({date, description, value, textColor}){
    return(
        <RegisterDiv textColor={textColor}>
            <div>
                <p>{date}</p>
                <h3>{description}</h3>                
            </div>
            <h4>{value}</h4>
        </RegisterDiv>
    )
}
const RegisterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 0px 15px;
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

`