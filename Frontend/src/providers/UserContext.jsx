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
                console.log(error);                
            }finally{
                setLoading(false);
            }
        }
        if(token && userId){
            getUser();
        }
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
            if(error.response?.data === "Incorrect password"){
                toast.error("Wrong password!")
            }
        }finally{
            setLoading(false);
        }
    };


    const userRegister = async (formData, setLoading ) => {
        try {
            setLoading(true);
            await api.post("/clients/", formData);
            navigate("/");
            toast.success("Registration completed successfully!");
        } catch (error) {
            console.log(error);
            if(error.response?.data === "Email already exists!"){
                toast.error("User already registered!")
            }
        }finally{
            setLoading(false);
        }
    };

    const userLogout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        toast.warning("Logging out...");
    };

    return(
        <UserContext.Provider value={{ user, userLogin, loading, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
};