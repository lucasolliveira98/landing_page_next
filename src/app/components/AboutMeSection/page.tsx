import styles from "./page.module.css";

export default function AboutMeSection(){
    return(
        <div id="aboutMe" className={styles.aboutMe}>
            <div className={styles.containerAboutMe}>
                <h1 className={styles.aboutMeTitle}>Conheçam um pouco sobre minha história</h1>
                <div className={styles.containerTextAboutMe}>
                <p className={styles.aboutMeBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br />
                <p className={styles.aboutMeBody}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br />
                <p className={styles.aboutMeBody}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <br />
                <p className={styles.aboutMeBody}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <p className={styles.aboutMeBody}>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</p>
                <br />
                <p className={styles.aboutMeBody}>Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.</p>
                <br />
                <p className={styles.aboutMeBody}>Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.</p>

                </div>
            </div>

            <div className={styles.containerAboutMePhoto}></div>
        </div>
    )
}