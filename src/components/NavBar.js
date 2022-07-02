
import styled from 'styled-components';
export default function NavBar(props){
    return(
        <Navbar>
            {props.children}
        </Navbar>
    );
}


const Navbar = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Playball&family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');
    height: 10vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        border: none;
        color: white;
        font-size: 40px;
        background: transparent;
        cursor: pointer;
        transition: font-size 0.3s;
        


        &:hover{ 
        font-weight: 900;
        color: #c2c2d6;
        font-size: 50px;
        }
    }

    p{
        font-family: 'Raleway', sans-serif;

        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }





`