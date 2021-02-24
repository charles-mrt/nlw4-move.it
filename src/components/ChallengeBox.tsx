import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

   const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

   return (
      <div className={styles.challengeContainer}>

         {activeChallenge ? (
            <div className={styles.challengeActive}>
               <header>ganhe {activeChallenge.amount} xp</header>

               <main>
                  <img src={`icons/${activeChallenge.type}.svg`}/>
                  <strong> Novo desafio </strong>
                  <p> {activeChallenge.description}</p>
               </main>

               <footer>
                  <button
                     type="button"
                     className={styles.challengeFailedButton}
                     onClick={resetChallenge}
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