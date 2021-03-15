import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Login } from "../components/Login";

interface HomeProps {
   userName: String, 
 }
 export default function userLogin(props) {
   
   return (
      <ChallengesProvider
         userName={props.userName}
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

   const { userName} = ctx.req.cookies
 
   return {
     props: {
       userName: String(userName),
     }
   }
 }