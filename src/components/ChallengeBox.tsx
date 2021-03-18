import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'
import {FiFrown, FiSmile} from "react-icons/fi";
const message = {
   startMessage: " Go go go !!! Finaliza o ciclo para receber um desafio :)",
   messageSucceeded:"Parabéns! E aí preparado para mais uma conquista? Iniciei um novo ciclo!",
   messageFailed: "Que Pena! Agora vai. Iniciei um novo ciclo!"
}

let messageContext = message.startMessage;

export function ChallengeBox() {

   const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
   const {resetCountdown} = useContext(CountDownContext);
   
   const {autoScrollTop} = useContext(CountDownContext);
   
   function handleChallengeSucceeded() {
      completeChallenge();      
      resetCountdown();
      messageContext = message.messageSucceeded;
      autoScrollTop();
   }

   function handleChallengeFailed() {      
      resetChallenge();
      resetCountdown();
      messageContext = message.messageFailed;
      autoScrollTop();
   }

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
                     onClick={handleChallengeFailed}                     
                  >
                     falhei <FiFrown />
                  </button>
                  
                  <button
                     type="button"
                     className={styles.challengeSucceededButton}
                     onClick={handleChallengeSucceeded}
                  >
                     Completei <FiSmile />
                  </button>

               </footer>
            </div> 

         ) : (
               <div className={styles.challengeNotActive}>
                  <strong>
                  {messageContext}
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

