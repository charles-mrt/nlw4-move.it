import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CreatesChartChallenge } from "../components/ChartChallenge";


interface HomeProps {
   level: number,
   currentExperience: number,
   challengesCompleted: number,
   challengesFailed: number,
   totalChallenge:number
 }

 export default function userGraphData(props) {


   return (
      <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      challengesFailed={props.challengesFailed}
      totalChallenge={props.totalChallenge}
    >
       <div>
          <CreatesChartChallenge />
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
