import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [ user, setUser] = useState(null);

    const navigate = useNavigate();

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/login/", formData);
            setUser(data.client);
            localStorage.setItem("@Token", data.token);
            reset();
            navigate("/contacts");
        } catch (error) {
            console.log(error);
            if(error.response?.data === "Invalid credentials"){
                toast.error("Senha errada minha fia!")
            }
        }finally{
            setLoading(false);
        }
    };


    const userRegister = async (formData, setLoading ) => {
        try {
            setLoading(true);
            await api.post("/clients/", formData)
            navigate("/login")
            toast.success('Cadastro realizado com sucesso!');
        } catch (error) {
            console.log(error);
            if(error.response?.data === 'Email ja existe'){
                toast.error('Usuario ja cadastrado')
            }
        }finally{
            setLoading(false);
        }
    };

    const userLogout = () => {
        setUser(null);
        navigate("/login");
        localStorage.removeItem("@TOKEN");
        toast.warning("Deslogando...");
    }

    return(
        <UserContext.Provider value={{ user, userLogin, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
};