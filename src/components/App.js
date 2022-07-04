import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./screens/SignInScreen";
import '../style.css';
import InitialScreen from "./screens/InitialScreen";
import Context from '../Context';
import {useState} from 'react';
import AddRegisterScreen from "./screens/AddRegisterScreen";

export default function App(){
    const [token, setToken] = useState('');
    //const apiUrl = "http://localhost:5000/";
    const apiUrl = "https://mywallet-api-leonardo.herokuapp.com/";
    

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return(
        <div className="main-container">
         <Context.Provider value={{token, setToken, apiUrl, authorization}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}/>
                <Route path="/sign-in" element={<SignInScreen />}/>
                <Route path="/initial-screen" element={<InitialScreen />}/>
                <Route path="/add-register" element={<AddRegisterScreen />}/>
            </Routes>
            </BrowserRouter>              
          </Context.Provider> 
      
        </div>

    );
}