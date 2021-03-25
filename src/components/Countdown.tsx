import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';
import { FiChevronsRight, FiXCircle, FiCheck, FiClock } from "react-icons/fi";

import Switch from 'react-switch';

export function Countdown() {

    const {       
        demoTime,
        fullTime,
        checked,
        lockToggle,
        minutes,
        seconds,
        hasFinished,
        isActive,
        handleChange,
        startCountdown,
        resetCountdown,
    } = useContext(CountDownContext);

    /* split value to add in array['',''] if result is not decimal add 0 before to split */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
    return (
        <div className={styles.countdown}>
            <header>
                {!checked ? (
                    <p><FiClock /> ativar tempo de teste?</p>
                ) :
                    <p><FiClock color={"#5965e0"} /> tempo de teste ativado!</p>}

                {<Switch
                    onChange={handleChange}
                    checked={checked}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={18}
                    onColor={"#5965e0"}
                    offColor={"#2e384d"}
                    disabled={lockToggle}
                />}
            </header>

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
                    Ciclo encerrado <FiCheck size={"2rem"} color={"#2ecc71"} />
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive} `}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo  <FiXCircle size={"2rem"} />
                                <span>
                                    <style jsx> 
                                        {
                                           `content: "";
                                            position: absolute;
                                            height: 0.2rem;
                                            left: 0;
                                            bottom: 0;
                                            background: var(--green);
                                            animation: loadBar ${ checked ? demoTime : fullTime }s linear normal;
                                            
                                            @keyframes loadBar { 0% {width: 0%;} 100% {width: 100%;} }`
                                        }
                                    </style>
                                </span>
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar um ciclo <FiChevronsRight size={"2rem"} />
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}