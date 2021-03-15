import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Login } from "../components/Login";

interface HomeProps {
  userName: String,
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  challengesFailed: number,
  totalChallenge: number

}
export default function userLogin(props) {

  return (
    <ChallengesProvider
      userName={props.userName}
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      challengesFailed={props.challengesFailed}
      totalChallenge={props.totalChallenge}
    >
      <div>
        <Head> <title> Login | move.it </title></Head>
        <Login />
      </div>
    </ChallengesProvider>
  )
}

/* get cookies to be used in the component */
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { userName, level, currentExperience, challengesCompleted, challengesFailed } = ctx.req.cookies

  return {
    props: {
      userName: String(userName),
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      challengesFailed: Number(challengesFailed),
      totalChallenge: Number(challengesFailed)
    }
  }
}
