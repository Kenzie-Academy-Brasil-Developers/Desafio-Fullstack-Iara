import { ContactList } from "../../components/ContactsList";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";

export const DashboardPage = () => {
    return(
        <DefaultTemplate>
            <main className={styles.dashPage}>
                <div className="container">
                    <ContactList/>
                </div>
            </main>
        </DefaultTemplate>
    );
};


