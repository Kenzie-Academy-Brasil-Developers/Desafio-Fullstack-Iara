import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { MdArrowBack } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { EditContactForm } from "../../components/forms/EditContactForm";

export const EditContactPage = () => {
    const { editingContact , setEditingContact} = useContext(ContactContext);

    const navigate = useNavigate();

    return editingContact ? ( 
        <DefaultTemplate>
            <main>
                <div className="container">
                    <button  
                        onClick={() => {
                            setEditingContact(null);
                            navigate("/contacts")
                        }}
                        className="link" 
                        to="/contacts"  
                    >
                        <MdArrowBack/> Voltar
                    </button>
                    <h1 className="title center">Altere um contato</h1>
                    <EditContactForm/>
                </div>
            </main>
        </DefaultTemplate>
    ) : (<Navigate to="/contacts"/>) 
};