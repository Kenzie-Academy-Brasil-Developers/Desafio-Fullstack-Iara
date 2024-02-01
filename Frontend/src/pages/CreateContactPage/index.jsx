import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { CreateContactForm } from "../../components/forms/CreateContactForm";
import styles from "./style.module.scss";
import pageStyles from "../../styles/modules/pageBox.module.scss";

export const CreateContactPage = () => {
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className={styles.flexBox}>
                    <Link 
                        className="link" 
                        to="/contacts">
                            <MdArrowBack/>Back
                    </Link>
                    <h1 className="label">Create a contact</h1>
                    <CreateContactForm/>

                </div>
            </div>
        </main>
    )
};


