
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from "../styles/pages/Home.module.css";

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { MainLogo } from "../components/MainLogo";
import { ExperienceBar } from "../components/ExperienceBar";
import { CountdownProvider } from '../contexts/CountdownContext';
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { Sidebar } from "../components/Sidebar";



interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  challengesFailed: number,
  totalChallenge:number
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      challengesFailed={props.challengesFailed}
      totalChallenge={props.totalChallenge}
    >
        
      <div className={styles.container}>      
        <Head> <title> Início | move.it </title></Head>
        
        <Sidebar />
        <div className={styles.wrap}> 
          <MainLogo />
          <ExperienceBar />
        
          <CountdownProvider>
            <section>          
              <div>              
                <Profile />             
              
                <CompletedChallenges />            
                <Countdown />
              </div>

              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

/* get cookies to be used in the component */

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, challengesFailed} = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      challengesFailed: Number(challengesFailed),
      totalChallenge: Number(challengesFailed)
    }
  }
}