import CardQuantAlunos from "../CardQuantAlunos/CardQuantAlunos";
import styles from "./page.module.css";

export default function AdvantagesSection(){
    return(
        <div id="advantages" className={styles.advantages}>
            <div className={styles.containerAdvantages}>
                <h1 className={styles.advantagesTitle}>Quais as vantagens da mentoria?</h1>

                <div className={styles.advantagesCard}>
                    <h3 className={styles.advantagesCardTitle}>Disciplina e gestão emocional</h3>
                    <span className={styles.advantagesCardSpan}>O mercado de opções binárias pode ser volátil e emocionalmente desafiador.</span>
                </div>

                <div className={styles.advantagesCard}>
                    <h3 className={styles.advantagesCardTitle}>Disciplina e gestão emocional</h3>
                    <span className={styles.advantagesCardSpan}>O mercado de opções binárias pode ser volátil e emocionalmente desafiador.</span>
                </div>

                <div className={styles.advantagesCard}>
                    <h3 className={styles.advantagesCardTitle}>Disciplina e gestão emocional</h3>
                    <span className={styles.advantagesCardSpan}>O mercado de opções binárias pode ser volátil e emocionalmente desafiador.</span>
                </div>

                <CardQuantAlunos />
            </div>
        </div>
    )
}