import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { MdArrowBack } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import { EditContactForm } from "../../components/forms/EditContactForm";
import styles from "./style.module.scss";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export const EditContactPage = () => {
    const { editingContact , setEditingContact} = useContext(ContactContext);

    const navigate = useNavigate();

    return editingContact ? ( 
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className={styles.flexBox}>
                    <button  
                        onClick={() => {
                            setEditingContact(null);
                            navigate("/contacts")
                        }}
                        className="link" 
                        to="/contacts"  
                    >
                        <MdArrowBack/>Back
                    </button>
                    <h1 className="label">Change a contat</h1>
                    <EditContactForm/>
                </div>
            </div>
        </main>
    ) : (<Navigate to="/contacts"/>) 
};

