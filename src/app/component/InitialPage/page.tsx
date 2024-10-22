import Header from "../Header/page";
import styles from "./page.module.css";

export default function InitialPage() {

    return(
        <>
            <Header/>
            
            <div className={styles.initialPage}>
                <div className={styles.containerInitialPage}>
                    <h1 className={styles.initialPageTitle}>Conquiste sua liberdade financeira</h1>
                    <h3 className={styles.initialPageBody}>
                        Imagine poder viver a vida que sempre sonhou, sem se preocupar com dívidas ou limitações financeiras.
                        <br /><br />
                        Conquistar a liberdade financeira não é apenas sobre ganhar mais dinheiro, mas sim aprender a administrar suas finanças, fazer investimentos inteligentes e construir um futuro seguro e próspero.
                        <br /><br />
                        Aqui, você terá acesso a ferramentas, estratégias e insights que vão transformar sua relação com o dinheiro, permitindo que você alcance seus objetivos e desfrute de uma vida com mais tranquilidade e autonomia.
                        <br /><br />
                        Agora é a hora de dar o primeiro passo rumo ao controle total do seu futuro financeiro!</h3>
                    {/* <button className={styles.initialPageButton}>Comprar</button> */}
                </div>
            </div>
        </>
    )
}