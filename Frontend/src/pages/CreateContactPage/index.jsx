import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { CreateContactForm } from "../../components/forms/CreateContactForm";

export const CreateContactPage = () => {
    return(
        <DefaultTemplate>
            <main>
                <Link className="link" to="/contacts"><MdArrowBack/>Voltar</Link>
                <h1 className="title center">Crie um contato</h1>
                <CreateContactForm/>
            </main>
        </DefaultTemplate>
    )
};
