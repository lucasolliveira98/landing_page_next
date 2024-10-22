
import styles from "./page.module.css";
import { Footer } from './component/Footer/page'
import InitialPage from './component/InitialPage/page'
import AboutMeSection from './component/AboutMeSection/page'
import AdvantagesSection from './component/AdvantagesSection/page'
import FeedbackSection from './component/FeedbackSection/page'
import CheckoutSection from './component/CheckoutSection/page';

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
