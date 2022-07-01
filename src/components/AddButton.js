import styled from 'styled-components';

export default function AddButton({buttonIcon, buttonText}){
    return(
    <Button>
        <span>{buttonIcon}</span>
        <h4>{buttonText}</h4>
    
    </Button>
    );
}

const Button = styled.button`
    background: #A328D6;
    border-radius: 5px;
    border: none;
    width: 90%;
    margin-bottom: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
        color: white;
        font-size: 25px;
        text-align: start;
        margin-left: 10px;
        margin-top: 10px;
    }


    h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        text-align: start;
        color: #FFFFFF;
        width: 64px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
`