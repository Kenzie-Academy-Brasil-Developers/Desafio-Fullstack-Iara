import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContactContext } from "../../providers/ContactContext"
import { ContactCard } from "./ContactCard"

export const ContactList = () => {
    const { contactList } = useContext(ContactContext);
    return(
        <div>
            <div>
                <h1>Lista de contatos</h1>
                <Link to="/contacts/create">Registrar contato</Link>
            </div>
            <ul>
                {contactList.map(contact => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    )
};