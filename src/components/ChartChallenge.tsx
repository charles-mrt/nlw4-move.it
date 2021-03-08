import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Sidebar} from "./Sidebar";

import styles from "../styles/components/ChartChallenge.module.css";

import {
    FiBarChart2,
    FiBarChart,
    FiUserPlus,
    FiUserCheck,
    FiUserMinus,
    FiTrendingDown,
    FiTrendingUp,
    FiUser,
    FiArrowUp
} from 'react-icons/fi';
import { MainLogo } from './MainLogo';

export function CreatesChartChallenge() {

    const { challengesCompleted, challengesFailed, totalChallenge } = useContext(ChallengesContext);

    return (
        <>
        <Sidebar />
        
            <div className={styles.content}><MainLogo />
                <div className={styles.chartChallenge}>
                
                    <section>
                        <header>                        
                            <span>Dados dos desafios <FiBarChart2 /></span>
                            <span> Charles Martins <FiUser /></span>
                        </header>
                        <main>
                            <div className={styles.totalChallenge}>
                                <strong>total : {totalChallenge} <FiUserCheck /></strong>

                                <span style={{ width: `${totalChallenge >= 40 ? 100 : totalChallenge}%` }} />
                            </div>

                            <div className={styles.challengesCompleted}>
                                <strong>completos: {challengesCompleted} <FiUserPlus /></strong>
                                <span style={{ width: `${challengesCompleted >= 100 ? 100 : challengesCompleted}%` }} />
                            </div>

                            <div className={styles.challengesFailed}>
                                <strong>incompletos: {challengesFailed} <FiUserMinus /></strong>
                                <span style={{ width: `${challengesFailed >= 100 ? 100 : challengesFailed}%` }} />
                            </div>
                        </main>
                        <div className={styles.challengesReport}>

                            {totalChallenge === 0 ? (
                                <h5>
                                    <FiBarChart color={"#5965e0"} />
                                    Relatório: Nenhum resultado
                                </h5>

                            ) : (
                                    challengesCompleted > challengesFailed ? (
                                        <h5>
                                            <FiTrendingUp color={"#5965e0"} />
                                            Relatório: Seus resultados estão no padrão esperado
                                        </h5>
                                    ) :
                                        <h5>
                                            <FiTrendingDown color={"#e03a86"} />
                                            Relatório: Seus resultados estão abaixo do esperado
                                        </h5>
                                )
                            }
                        
                            <ul>
                                <li className={styles.total}> 
                                    <h4><FiUserCheck /> Total</h4>
                                    <h4>2</h4>
                                </li>

                                <li className={styles.completed}> 
                                    <h4><FiUserPlus /> Completos</h4>
                                    <h4>1</h4>
                                </li>

                                <li className={styles.failed}>   
                                    <h4><FiUserMinus /> Incompletos</h4>
                                    <h4>1</h4>
                                </li>

                                <li className={styles.level}>  
                                    <h4><FiArrowUp /> Level</h4>
                                    <h4>1</h4>
                                </li>
                            </ul>
                        </div>
                    </section>               
                </div>
            </div>
        </>
    );


}
