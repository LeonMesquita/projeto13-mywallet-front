import LoginScreen from "./LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./SignInScreen";
import '../style.css';
import InitialScreen from "./InitialScreen";
import Context from '../Context';
import {useState} from 'react';

export default function App(){
    const [token, setToken] = useState('teste');
    const apiUrl = "http://localhost:5000";
    
    return(
        <div className="main-container">
         <Context.Provider value={{token, setToken, apiUrl}}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}/>
                <Route path="/sign-in" element={<SignInScreen />}/>
                <Route path="/initial-screen" element={<InitialScreen />}/>
            </Routes>
            </BrowserRouter>              
          </Context.Provider> 
      
        </div>

    );
}