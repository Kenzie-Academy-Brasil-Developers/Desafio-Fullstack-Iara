import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [ user, setUser] = useState(null);

    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const pathname = window.location.pathname;

    useEffect(() => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@TOKEN");

        const getUser = async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/clients/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data);
                navigate(pathname)
            } catch (error) {
                console.log(error.response?.data || error.message);                
            }finally{
                setLoading(false);
            }
        }
        getUser();
    }, []);

    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true);
            const { data } = await api.post("/login", formData);
            setUser(data.client);
            localStorage.setItem("@USERID", data.client.id);
            localStorage.setItem("@TOKEN", data.token);
            reset();
            navigate("/contacts");
        } catch (error) {
            console.log(error);
            if(error.response?.data === "Invalid credentials"){
                toast.error("Senha errada!")
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
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
        toast.warning("Deslogando...");
    }

    return(
        <UserContext.Provider value={{ user, userLogin, loading, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
};