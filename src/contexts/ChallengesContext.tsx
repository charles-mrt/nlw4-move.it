import {createContext, useState, ReactNode, useEffect} from 'react';

import challenges from '../../challenges.json';


interface Challenge {
   type: 'body' | 'eye';
   description: string;
   amount: number;
}

interface ChallengesContextData {
   level: number;
   currentExperience: number;
   experienceToNextLevel: number;
   challengesCompleted: number;
   activeChallenge: Challenge;
   levelUp: () => void;
   startNewChallenge: () => void;
   resetChallenge: () => void;
   completeChallenge: () => void;
}


/* component typing */
interface ChallengesProviderProps {
   children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider( {children}:ChallengesProviderProps ) {
   
   const [level, setLevel] = useState(1);
   const [currentExperience, setCurrentExperience] = useState(0);
   const [challengesCompleted,setchallengesCompleted] = useState(0);
   const [activeChallenge, setActiveChallenge] = useState(null)

   /* calculation of the next level of experience based on potentiation 
      (level + 1 ) * level Dificult, square Power) 
   */
   const experienceToNextLevel = Math.pow(( level + 1 ) * 4, 2 )


   useEffect(() => {
      Notification.requestPermission();
   },[])

   function levelUp(){
      setLevel(level + 1);
   }

   /* get challenges randomly */
   function startNewChallenge() {
      const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengesIndex]

      setActiveChallenge(challenge)

      new Audio( '/notification.mp3').play();

      if ( Notification.permission === 'granted' ) {
         new Notification( 'Novo desafio 🎉 ' ) , {
            body: `Valendo ${challenge.amount}xp!`
         }
   
      }
   }
   
  

   /* reset challenge if user failed */
   function resetChallenge() {
      setActiveChallenge(null);
   }

   /* complete challenge  */
   function completeChallenge() {
      if ( ! activeChallenge ) {
         return;
      }

      const { amount } = activeChallenge;
      let finalExperience = currentExperience + amount;
   
      if ( finalExperience >= experienceToNextLevel ) {
         finalExperience = finalExperience - experienceToNextLevel;
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setchallengesCompleted(challengesCompleted + 1);
   }

   return(
      <ChallengesContext.Provider
       value={{
         level,
         currentExperience,
         challengesCompleted,
         experienceToNextLevel,
         levelUp,
         startNewChallenge,
         activeChallenge,
         resetChallenge,
         completeChallenge
       }}
      >
         {children}
      </ChallengesContext.Provider>
   );
}