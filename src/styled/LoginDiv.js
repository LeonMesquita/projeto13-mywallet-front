import styled from 'styled-components';


 const LoginDiv = styled.div`
 

 @import url('https://fonts.googleapis.com/css2?family=Playball&family=Saira+Stencil+One&display=swap');
    width: 768px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    h1{
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: white;
    }


    @media(max-width: 767px) {
        width: 100%;
    }
`
export default LoginDiv;

//export default {LoginDiv}