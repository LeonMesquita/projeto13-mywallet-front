import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner(){
    return(
 
        <ThreeDots 
            height="50"
            width="50"
            color='white'
            ariaLabel='loading'
            
        />
    );
}

const Loader = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`