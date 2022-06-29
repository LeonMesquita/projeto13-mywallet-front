import LoginScreen from "./LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./SignInScreen";
import '../style.css';
export default function App(){
    return(
        <div className="main-container">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />}/>
            <Route path="/signin" element={<SignInScreen />}/>
        </Routes>
        </BrowserRouter>        
        </div>

    );
}