import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted, challengesFailed, totalChallenge } = useContext(ChallengesContext); 
    return(
        <div className={ styles.challengesContainer } >
            
            <div className={ styles.completedChallengesContainer } >                            
                <span>Desafios completos </span>
                <span>{challengesCompleted}</span>                   
            </div>
        
            <div className={ styles.FailedchallengesContainer } > 
                <span> Desafios incompletos </span>
                <span>{ challengesFailed }</span>                
            </div>

            <div className={ styles.TotalchallengesContainer } >                
                <span> Total de desafios </span>
                <span>{ totalChallenge }</span>   
   
            </div>

        </div>
    ); 
}