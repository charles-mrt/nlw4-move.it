import styles from '../styles/components/Login.module.css';
import { FiUser, FiLogIn } from "react-icons/fi"
import React, { useState, useContext } from 'react';
import Router from 'next/router';
import { ChallengesContext } from "../contexts/ChallengesContext";


export function Login() {
   
   let [color, setColor] = useState("#9c27b0");

   const [Name, setUserName] = useState("");
   let { userName, getUserName } = useContext(ChallengesContext)

   function handleSubmit(event) {
      event.preventDefault();
   }

   function sendUserName() {      
      getUserName(userName = Name);            
      Router.push("/moveit");                    
   }
   
   return (

      <div className={styles.pageLogin}>
         <header><img src="/assets/logo.svg" alt="MoveIT"/></header>
         <div>
            <main>
               {<FiUser color={color} style={{ boxShadow: `inset 0px 0px 8px 0px${color}` }} />}

               <form onSubmit={handleSubmit} >
                  <fieldset>
                     <legend> Nome de Usuário </legend>
                     <label htmlFor="name"></label>

                     <input
                        type="text"
                        id="name"
                        placeholder="nome"
                        value={Name}
                        onChangeCapture={() => setColor(color = "#57d45d")}
                        onChange={event => setUserName(event.target.value)}
                        required
                     />
                  </fieldset>                          
                     <button className={styles.confirmButton} type="submit" onClick={sendUserName } >
                     Confirmar <FiLogIn />
                  </button>
               </form>
            </main>
         </div>
      </div>
   )


}