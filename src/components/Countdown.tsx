import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let buttonName = "Iniciar um ciclo";

export function Countdown() {

    const [ time, setTime ] = useState( 25 * 60 );
    const [ active, setActive ] = useState( false );

    /* rounds time down */
    const minutes = Math.floor( time / 60 );
    
    const seconds = time % 60;
    
    /*split value to add in array['',''] if result is not decimal add 0 before to split */
    const [ minuteLeft, minuteRight ] = String(minutes).padStart( 2 , '0' ).split('')
    const [ secondLeft, secondRight ] = String(seconds).padStart( 2 , '0' ).split('')
    


    function startCountdown() {
        setActive( true );
        buttonName = "pausar ciclo";
    }

    useEffect(() => {
        if ( active && time > 0 ) {

            setTimeout(() => {        
                setTime( time - 1 );
            }, 1000 )
            
        } 
    }, [active, time ] ) 

    return (
        <div>
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

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick = {startCountdown}
            >
                {buttonName}
            </button>
        </div>
    );

}