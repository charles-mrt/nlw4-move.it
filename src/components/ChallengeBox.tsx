import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

   const hasActiveChallenge = true;

   return (
      <div className={styles.challengeContainer}>

         {hasActiveChallenge ? (
            <div className={styles.challengeActive}>
               <header>Ganhe 400 xp</header>

               <main>
                  <img src="icons/body.svg"/>
                  <strong> Novo desafio </strong>
                  <p> Hei, vai tomar um cafezinho e aproveita para alongar</p>
               </main>

               <footer>
                  <button
                     type="button"
                     className={styles.challengeFailedButton}
                  >
                     falhei :(
                  </button>
                  
                  <button
                     type="button"
                     className={styles.challengeSucceededButton}
                  >
                     Completei :)
                  </button>

               </footer>
            </div>

         ) : (
               <div className={styles.challengeNotActive}>
                  <strong>
                     Go go go !!!< br /> Finaliza o ciclo para receber um desafio :)
               </strong>
                  <p>
                     <img src="icons/level-up.svg" alt="Level Up" />
                  Avance de Level completando desafios.
               </p>
               </div>
            )}
      </div>
   );

}