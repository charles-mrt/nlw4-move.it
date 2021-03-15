import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const avatarUrl = "/assets/userAvatar.svg";

export function Profile() {
    
    const {level, userName} = useContext(ChallengesContext)      
    return (
        <div className={ styles.profileContainer }>
            <img src={avatarUrl} alt={userName}/>
            <div>
                <strong>nome: {userName} </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
                
            </div>
        </div>
    );
}