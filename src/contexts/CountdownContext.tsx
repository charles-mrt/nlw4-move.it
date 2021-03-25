import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from './ChallengesContext';


interface CountDownContextData {
   demoTime: number,
   startTime:number,
   checked: boolean,
   lockToggle: boolean,
   minutes: number,
   seconds: number,
   hasFinished: boolean,
   isActive: boolean,
   toggleTimeDemo: boolean,
   startCountdown: () => void;
   resetCountdown: () => void;
   autoScrollBottom: () => void;
   autoScrollTop: () => void;
   toggleCountDown: () => void;   
   handleChange: (string) => void;
}

interface CountDownProviderProps {
   children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountDownProviderProps) {

   // demoTime 3 seconds = 0.05
   // StartTime 25 minutes = 25

   const demoTime = 0.05 * 60
   const startTime = 25 * 60;
   const { startNewChallenge } = useContext(ChallengesContext);

   const [time, setTime] = useState(startTime);
   const [isActive, setIsActive] = useState(false);
   const [hasFinished, setHasFinished] = useState(false);
   const [toggleTimeDemo, setToggleTimeDemo] = useState(false);
   const [checked, setChecked] = useState(false);
   const [lockToggle, setLockToggle] = useState(false)
   
   /* rounds time down */
   const minutes = Math.floor(time / 60);

   const seconds = time % 60;
  

   /*get toogle value*/
   function toggleCountDown() {
      setToggleTimeDemo(true)
   }
   /* switch toogle by user click */
   const handleChange = nextChecked => {
      setChecked(nextChecked)
      toggleCountDown()
   }

   useEffect(() => {
      if (toggleTimeDemo && time === startTime) {
         setTime(demoTime)
         setToggleTimeDemo(false)

      } else if (toggleTimeDemo) {
         setTime(startTime)
         setToggleTimeDemo(false)
      }

   }, [toggleTimeDemo, time, startTime])

   
   function startCountdown() {
      setIsActive(true);
      setLockToggle(true)
   }

   function autoScrollBottom() {
      const scrollBottom = window.scrollTo(0, document.body.scrollHeight);
   }
   function autoScrollTop() {
      const scrollBottom = window.scrollTo(0, 0);
   }

   function resetCountdown() {
      clearTimeout(countdownTimeout)
      setIsActive(false);
      setTime(startTime);
      setHasFinished(false)
      setLockToggle(false)
      setChecked(false)
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
         demoTime,
         startTime,
         checked,
         lockToggle,
         minutes,
         seconds,
         hasFinished,
         isActive,
         toggleTimeDemo,
         startCountdown,
         resetCountdown,
         autoScrollBottom,
         autoScrollTop,
         toggleCountDown,         
         handleChange,
      }}>
         {children}
      </CountDownContext.Provider>
   )
}
