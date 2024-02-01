import { useContext } from "react";
import { MdEdit, MdDelete, MdVisibility  } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import { ContactContext } from "../../../providers/ContactContext";
import styles from "./style.module.scss";

export const ContactCard = ({contact}) => {
    const { deleteContact, setEditingContact } = useContext(ContactContext);

    const navigate = useNavigate();
    return(
        <li className={styles.contactCard}>
            <div>
                <span className="paragraph"> 
                    <p><strong>Contact:</strong> {contact.full_name}</p>
                    <p><strong>Phone:</strong>{contact.tel}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Creation date:</strong> {contact.createdAt}</p>
                    <p><strong>Update date:</strong> {contact.updatedAt}</p>
                </span>
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
                        <MdEdit size={25}/>
                </button>
                <button 
                    onClick={() => {
                        deleteContact(contact.id)
                    }} 
                    title="Remover"
                    aria-label="remove"
                    >
                    <MdDelete size={25}/>
                </button>
            </div>
        </li>
    )
};       

