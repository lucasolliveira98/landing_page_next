"use client"

import styles from "./page.module.css";

export default function Header(){

    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    };
    
    return(
        <div id="header" className={styles.header}>
            <h3 className={styles.itemHeader} onClick={() => scrollToSection('aboutMe')}>Minha história</h3>
            <h3 className={styles.itemHeader} onClick={() => scrollToSection('advantages')}>Vantagens</h3>
            <h3 className={styles.itemHeader} onClick={() => scrollToSection('feedBack')}>Feedback</h3>
            <h3 className={styles.itemHeader} onClick={() => scrollToSection('checkout')}>Checkout</h3>
        </div>
    )
}