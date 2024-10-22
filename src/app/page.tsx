
import styles from "./page.module.css";
import Footer from './components/Footer/page'
import InitialPage from './components/InitialPage/page'
import AboutMeSection from './components/AboutMeSection/page'
import AdvantagesSection from './components/AdvantagesSection/page'
import FeedbackSection from './components/FeedbackSection/page'
import CheckoutSection from './components/CheckoutSection/page';

export default function Home() {

    return (

        <main className={styles.main}>

            <InitialPage/>
            <AboutMeSection/>
            <AdvantagesSection/>
            <FeedbackSection/>
            <CheckoutSection/>
            <Footer />
            
        </main>
    );
}
