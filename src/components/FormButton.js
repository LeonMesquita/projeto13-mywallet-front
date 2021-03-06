import styled from 'styled-components';
export default function FormButton({buttonText}){
    return(
    <Button>
        {buttonText}
    </Button>
    )
}

const Button = styled.button`
background: #A328D6;
border-radius: 5px;
width: 326px;
height: 50px;
border: none;
width: 100%;
margin-bottom: 36px;
cursor: pointer;
transition: background-color 0.5s;



font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

color: #FFFFFF;

&:hover{
        background-color:rgba(0,0,200,0.1);
        font-weight: 900;
    }
`