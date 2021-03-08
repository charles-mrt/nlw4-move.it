import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from './ChallengesContext';


interface CountDownContextData {
   minutes: number,
   seconds: number,
   hasFinished: boolean,
   isActive: boolean,
   startCountdown: () => void;
   resetCountdown: () => void;
   autoScrollBottom: () => void;
   autoScrollTop: () => void;
}

interface CountDownProviderProps {
   children: ReactNode;
}

export const CountDownContext = createContext ({} as CountDownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider( {children} : CountDownProviderProps ) {

   // StartTime 25 minutes = 25
    // StartTime 3 seconds = 0.05
    const startTime =  0.05 * 60; 
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(startTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

     /* rounds time down */
    const minutes = Math.floor(time / 60);

    const seconds = time % 60;

    function startCountdown() {
      setIsActive(true);
  }

  function autoScrollBottom(){
    const scrollBottom = window.scrollTo(0, document.body.scrollHeight);
  }                                     
  function autoScrollTop(){
    const scrollBottom = window.scrollTo(0,0);
  }

  function resetCountdown() {
      clearTimeout(countdownTimeout)
      setIsActive(false);
      setTime(startTime);
      setHasFinished(false)
  }

  useEffect(() => {
      if (isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
              setTime(time - 1);
          }, 1000)
          

      } else if (isActive && time === 0) {
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
          autoScrollBottom();
        }

  }, [isActive, time])

   return (
      <CountDownContext.Provider value={{
         minutes,
         seconds,
         hasFinished,
         isActive,
         startCountdown,
         resetCountdown,
         autoScrollBottom,
         autoScrollTop,
      }}>
         {children}
      </CountDownContext.Provider>
   )
}
