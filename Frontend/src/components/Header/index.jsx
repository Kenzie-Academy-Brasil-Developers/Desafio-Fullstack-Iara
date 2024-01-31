import { useContext } from "react";
import { UserContext } from "../../providers/UserContext"


export const Header = () => {
    const { user, userLogout } = useContext(UserContext);
    return(
        <header>
            <div>
            Header 
                <div>
                    <p>
                        {user && user.full_name ? `Seja bem vindo(a) ${user.full_name}` : null}
                    </p>
                </div>
                <button onClick={userLogout}>Sair</button>
            </div>
        </header>
    )
}