import { useContext} from "react";
import { UserContext } from "../../providers/UserContext"
import styles from "./style.module.scss";

export const Header = () => {
    const { user, userLogout } = useContext(UserContext);

    return(
        <header>
            <div className="container">
                <div className={styles.flexBox}>
                    <h1 className="logo">Contacts</h1>
                    <div>
                        <div>
                            <span className="logo">Welcome</span><p className="paragraph">{user?.full_name}</p>
                            <p className="paragraph">{user?.email}</p>
                        </div>
                        <button className="btnSmall" onClick={userLogout}>Exit</button>
                    </div>
                </div>
            </div>
        </header>
    );
};
