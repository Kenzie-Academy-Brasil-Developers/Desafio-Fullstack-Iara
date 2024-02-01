import styles from "./style.module.scss";

export const ErrorPage = () =>{
    return(
        <div className={styles.error}>
            <h1 className="label">Error:<strong> 404!</strong></h1>
            <img 
                src="https://gifs.eco.br/wp-content/uploads/2022/04/gifs-de-cachorros-engracados-31.gif" 
                alt="erro" 
            />
            <p className="label">Unable to find the page!</p>
        </div>
    )
};
