import LoginScreen from "./LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./SignInScreen";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />}/>
            <Route path="/signin" element={<SignInScreen />}/>
        </Routes>
        </BrowserRouter>
    );
}