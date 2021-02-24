import {createContext, useState, ReactNode} from 'react';

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
}


/* component typing */
interface ChallengesProviderProps {
   children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider( {children}:ChallengesProviderProps ) {
   
   const [level, setLevel] = useState(1);
   const [currentExperience, setCurrentExperience] = useState(30);
   const [challengesCompleted,setchallengesCompleted] = useState(2);
   const [activeChallenge, setActiveChallenge] = useState(null)

   /* calculation of the next level of experience based on potentiation 
      (level + 1 ) * level Dificult, square Power) 
   */
   const experienceToNextLevel = Math.pow(( level + 1 ) * 4, 2 )

   function levelUp(){
      setLevel(level + 1);
   }

   /* get challenges randomly */
   function startNewChallenge() {
      const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengesIndex]

      setActiveChallenge(challenge)
   }

   /* reset challenge if user failed */
   function resetChallenge() {
      setActiveChallenge(null);
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
       }}
      >
         {children}
      </ChallengesContext.Provider>
   );
}