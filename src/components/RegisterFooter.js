import styled from 'styled-components';
export default function RegisterFooter({value}){
    return(
        <Footer>
            <h3>Saldo</h3>
            <h4>{value}</h4>
        </Footer>
    );
}

const Footer = styled.div`
    height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 5px;

    h3{
        margin-left: 15px;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #000000;
    }

    h4{
        
        margin-right: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: #03AC00;
    }

`