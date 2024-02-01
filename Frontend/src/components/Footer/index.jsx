import styles from "./style.module.scss";

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.flexBox}>
                    <h1 className="logo">Contacts</h1>
                    <p className="paragraph white">&copy; All rights reserved - Iara Reis</p>
                </div>
            </div>
        </footer>
    );
};
