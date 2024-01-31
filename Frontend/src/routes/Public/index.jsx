import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom";

//rotas que usuario so pode acesar logado 
export const PublicRoutes = ( ) => {
    const { user } = useContext(UserContext);

    return !user ? <Outlet/> : <Navigate to="/contacts"/>
}