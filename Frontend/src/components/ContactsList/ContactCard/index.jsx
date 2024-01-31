import { useContext } from "react";
import { MdEdit, MdDelete, MdVisibility  } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import { ContactContext } from "../../../providers/ContactContext";

export const ContactCard = ({contact}) => {
    const { deleteContact, setEditingContact } = useContext(ContactContext);

    const navigate = useNavigate();
    return(
        <li>
            <div>
                <span className="paragraph"> 
                    <strong>{contact.tel}</strong>{contact.full_name}
                </span>
                <p className="paragraph">{contact.email}</p>
                <h4>{contact.createdAt}</h4>
                <h4>{contact.updatedAt}</h4>
            </div>
            <div>
                <button 
                    onClick={() => {
                        setEditingContact(contact);
                        navigate("/contacts/edit");
                    }} 
                    title="Editar" 
                    aria-label="edit"
                    >
                        <MdEdit/>
                </button>
                <button 
                    onClick={() => {
                        deleteContact(contact.id)
                    }} 
                    title="Remover"
                    aria-label="remove"
                    >
                    <MdDelete/>
                </button>

                <Link to="" title="Visualizar" aria-label="view">
                    <MdVisibility/>
                </Link>
            </div>
        </li>
    )
};       

