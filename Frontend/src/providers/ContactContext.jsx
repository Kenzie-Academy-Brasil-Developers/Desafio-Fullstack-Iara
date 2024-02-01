import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({children}) => {
    const { user} = useContext(UserContext);

    const [ contactList, setContactList] = useState([]);
    const [ editingContact, setEditingContact ] =useState(null);

    const navigate = useNavigate();

    const token = localStorage.getItem("@TOKEN");

    useEffect(() => {
        const getContact = async() => {
            try {
                const { data } = await api.get("/contacts", {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                setContactList(data);
            } catch (error) {
                console.log(error);  
            }
        }
        getContact();
    }, []);

    const createContact = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const newContact = { 
                ...formData,
            };
            //Atualizando o servidor (back-end)
            const { data } = await api.post("/contacts", newContact, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            //Atualizando o front-end com manipulacao de estado.
            setContactList([...contactList, data]);
            toast.success("Contato adicionado com sucesso!");
            navigate("/contacts")

        } catch (error) {
            console.error(error)
        }
    };

    const deleteContact = async(deletingId) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/contacts/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newContact = contactList.filter(contact => contact.id !== deletingId);
            setContactList(newContact);
            toast.success("Contato excluido com sucesso!");
        } catch (error) {
            console.error(error);
        }
    };

    const editScrap = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.patch(`/contacts/${editingContact.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newContactList = contactList.map(contact => {
                if (contact.id === editingContact.id) {
                    return data;
                } else {
                    return contact;
                }
            });
            setContactList(newContactList);
            setEditingContact(null);

            toast.success("Contato editado com sucesso!");
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <ContactContext.Provider value={{contactList, createContact, deleteContact, editingContact, setEditingContact, editScrap}}>
            {children}
        </ContactContext.Provider>
    )
};