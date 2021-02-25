import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const avatarUrl = "https://avatars.githubusercontent.com/u/60299718?s=400&u=435f6098dd446f0426b498c26a1bfe335c83abf9&v=4"
let userAvatar = avatarUrl ? avatarUrl : "/assets/userAvatar.svg";  ;

export function Profile() {

    const {level} = useContext(ChallengesContext)


    return (
        <div className={ styles.profileContainer }>
            <img src={userAvatar} alt="Charles Martins"/>
            
            <div>
                <strong>Charles Martins</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
                
            </div>
        </div>
    );
}