import { useState, useEffect, useContext } from 'react';
import { CountDownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';
import { FiChevronsRight, FiXCircle, FiCheck} from "react-icons/fi";


export function Countdown() {
    
    const {        
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown,
    } = useContext(CountDownContext);

    /* split value to add in array['',''] if result is not decimal add 0 before to split */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


    return (
        <div>
            <div>                                             
            </div>
           
            <div className={styles.countdownContainer}>

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            {hasFinished ? (
                <button
                 disabled
                 className={styles.countdownButton}
                >
                    Ciclo encerrado <FiCheck size={"2rem"} color={"#2ecc71"}/>
                </button>
            ) : (
                    <>
                      { isActive ? (
                        <button
                         type="button"
                         className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                         onClick={resetCountdown}
                        >
                         Abandonar ciclo  <FiXCircle size={"2rem"}/> 
                        </button>

                      ) : ( 
                        <button
                         type="button"
                         className={styles.countdownButton}
                         onClick={startCountdown}
                        >
                         Iniciar um ciclo <FiChevronsRight size={"2rem"}/> 
                        </button>
                      )}
                    </>
                )}
        </div>
    );

}