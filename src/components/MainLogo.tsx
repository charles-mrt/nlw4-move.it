import styles from '../styles/components/MainLogo.module.css';

export function MainLogo() {
   
    return (
        <> 
            {/*<p className={styles.alertDevelopment}><small>em desenvolvimento</small></p>*/}
            <div className={ styles.mainLogo }>            
                <img src="/assets/logo.svg" alt="MoveIT" className={styles.logo}/>
            </div>
        </>
    );
}