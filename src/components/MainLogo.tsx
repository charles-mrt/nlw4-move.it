import styles from '../styles/components/MainLogo.module.css';

export function MainLogo() {
   
    return (
        <div className={ styles.mainLogo }>            
            <img src="/assets/logo.svg" alt="MoveIT" className={styles.logo}/>
        </div>
    );
}