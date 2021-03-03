import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from "../styles/components/ChartChallenge.module.css";
import {
    FiBarChart2,
    FiBarChart,
    FiUserPlus,
    FiUserCheck,
    FiUserMinus,
    FiTrendingDown,
    FiTrendingUp
} from 'react-icons/fi';

export function CreatesChartChallenge() {

    const { challengesCompleted, challengesFailed, totalChallenge } = useContext(ChallengesContext);

    return (
        
            <div className={styles.chartChallenge}>
                <details><summary>Dados do desafio - Saiba mais</summary>
                <section>
                    <header>Dados dos desafios <FiBarChart2 /></header>

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
                    </div>
                </section>
                </details>
            </div>
       
    );


}
