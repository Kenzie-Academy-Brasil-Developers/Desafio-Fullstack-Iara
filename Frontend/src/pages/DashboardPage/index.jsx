import { ContactList } from "../../components/ContactsList";
import { DefaultTemplate } from "../../components/DefaultTemplate"


export const DashboardPage = () => {
    return(
        <DefaultTemplate>
            <main>
                <h1>Dashboard Page</h1>
                <ContactList/>
            </main>
        </DefaultTemplate>
    );
};

