import { Routes, Route} from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/Errorpage";
import { HomePage } from "../pages/HomePage";


export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/login" element={<HomePage/>} /> 
            <Route path="/clients" element={<RegisterPage/>} /> 
            <Route path="/contacts" element={<DashboardPage/>} /> 
            <Route path="#" element={<ErrorPage/>} />
        </Routes>
    )
}
    
