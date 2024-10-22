import photoAluno1 from '../../assets/image_1.jpeg'
import photoAluno2 from '../../assets/image_2.jpeg'
import photoAluno3 from '../../assets/image_3.jpeg'
import photoAluno4 from '../../assets/image_4.jpeg'
import photoAluno5 from '../../assets/image_2.jpeg'

import ProfileCard from "../ProfileCard/ProfileCard";
import styles from "./page.module.css";

export default function FeedbackSection(){
    return(
        <div id="feedBack" className={styles.feedBack}>
            <h1 className={styles.feedBackTitle}>Feedback dos alunos</h1>
            <div className={styles.feedBackCardContainer}>
                <ProfileCard 
                    name={"Willian"} 
                    description={"dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet, dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet. "} 
                    imageUrl={photoAluno1}/>

                <ProfileCard 
                    name={"Willian"} 
                    description={"dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet, dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet. "} 
                    imageUrl={photoAluno2}/>
                <ProfileCard 
                    name={"Willian"} 
                    description={"dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet, dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet. "} 
                    imageUrl={photoAluno3}/>

                <ProfileCard 
                    name={"Willian"} 
                    description={"dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet, dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet. "} 
                    imageUrl={photoAluno4}/>

                <ProfileCard 
                    name={"Willian"} 
                    description={"dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet, dolor non Donec id nec Ut Vestibulum ullamcorper dui elit Donec facilisis in venenatis diam amet. "} 
                    imageUrl={photoAluno5}/>
            </div>
        </div>
    )
}