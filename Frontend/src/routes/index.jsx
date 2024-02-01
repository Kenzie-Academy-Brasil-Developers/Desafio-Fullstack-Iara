import { Routes, Route} from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ErrorPage } from "../pages/Errorpage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoutes } from "./Private";
import { PublicRoutes } from "./Public";
import { CreateContactPage } from "../pages/CreateContactPage";
import { EditContactPage } from "../pages/EditContactPage";


export const RoutesMain = () => {
    return(
        <Routes>
            {/*Rotas de acesso somente para usuarios deslogados*/}
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<HomePage/>} /> 
                <Route path="/clients" element={<RegisterPage/>} /> 
            </Route>
            {/*Rotas de acesso somente para usuarios logados*/}
            <Route element={<PrivateRoutes/>}>
                <Route path="/contacts" element={<DashboardPage/>} /> 
                <Route path="/contacts/create" element={<CreateContactPage/>} />
                <Route path="/contacts/edit" element={<EditContactPage/>} />
            </Route>
            {/*Rotas livre*/}
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    );
};

