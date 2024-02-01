import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContactContext } from "../../providers/ContactContext"
import { ContactCard } from "./ContactCard"
import styles from "./style.module.scss";

export const ContactList = () => {
    const { contactList } = useContext(ContactContext);
    return(
        <section className={styles.contactListSection}>
            <div>
                <h1 className="title">Contact List</h1>
                <Link className="btnSmall" to="/contacts/create">
Register contact</Link>
            </div>
            <ul>
                {contactList.map(contact => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </section>
    )
};