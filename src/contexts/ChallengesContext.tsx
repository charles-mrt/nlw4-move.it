import { createContext, useState, ReactNode, useEffect } from 'react';

import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

import { isMobile } from 'react-device-detect';
import { LevelUpModal } from '../components/LevelUpmodal';


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
   challengesFailed: number;
   activeChallenge: Challenge;
   totalChallenge:number;
   levelUp: () => void;
   startNewChallenge: () => void;
   resetChallenge: () => void;
   completeChallenge: () => void;
   closeLevelUpModal: () => void;
}


/* component typing */
interface ChallengesProviderProps {
   children: ReactNode;
   level: number,
   currentExperience: number,
   challengesCompleted: number,
   challengesFailed: number,
   totalChallenge: number,   
}


export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {

   const [level, setLevel] = useState(rest.level ?? 1);
   const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
   const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
   const [challengesFailed, setChallengesFailed] = useState(rest.challengesFailed ?? 0);   
   let [totalChallenge] = useState(rest.totalChallenge ?? 0);
   const [activeChallenge, setActiveChallenge] = useState(null);
   const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  
   /* calculation of the next level of experience based on potentiation 
      (level + 1 ) * level Dificult, square Power) 
   */
   const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


   useEffect(() => {
      Notification.requestPermission();
   }, [])


   useEffect(() => {

      Cookies.set('level', String(level));
      Cookies.set('currentExperience', String(currentExperience))
      Cookies.set('challengesCompleted', String(challengesCompleted))
      Cookies.set('challengesFailed', String(challengesFailed))
      Cookies.set('totalChallenge', String(totalChallenge))

   }, [level, currentExperience, challengesCompleted, challengesFailed, totalChallenge]);


   function levelUp() {
      setLevel(level + 1);
      setIsLevelUpModalOpen(true)      
   }

   function closeLevelUpModal(){
      setIsLevelUpModalOpen(false)
   }


   /* get challenges randomly */
   function startNewChallenge() {
      const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengesIndex]

      setActiveChallenge(challenge)

      new Audio('/notification.mp3').play();

      if (!isMobile && Notification.permission === 'granted') {
         new Notification('Novo desafio 🎉 ', {
            body: `Valendo ${challenge.amount}xp!`
         })
      }
   }
   /* reset challenge if user failed */
   function resetChallenge() {
      setActiveChallenge(null);                  
      setChallengesFailed(challengesFailed + 1 ) 
   }     
  
   /* complete challenge  */
   function completeChallenge() {
      if (!activeChallenge) {               
         return;
      }

      const { amount } = activeChallenge;
      let finalExperience = currentExperience + amount;

      if (finalExperience >= experienceToNextLevel) {
         finalExperience = finalExperience - experienceToNextLevel;
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);        
   }
   
   totalChallenge = challengesCompleted + challengesFailed;
  
  
   return (
      <ChallengesContext.Provider
         value={{
            level,
            currentExperience,
            challengesCompleted,
            challengesFailed,
            experienceToNextLevel,
            activeChallenge,
            totalChallenge,
            levelUp,
            startNewChallenge,         
            resetChallenge,
            completeChallenge,
            closeLevelUpModal,            
         }}
      >
         {children}
         { isLevelUpModalOpen && <LevelUpModal /> }
              
      </ChallengesContext.Provider>
   );
}