import styles from '../styles/components/MainLogo.module.css';

export function MainLogo() {
   
    return (
        <>             
            <div className={ styles.mainLogo }>            
                <img src="/assets/logo.svg" alt="MoveIT" className={styles.logo}/>
               {<small>Em desenvolvimento - time teste 0:3s</small>}
            </div>
        </>
    );
}