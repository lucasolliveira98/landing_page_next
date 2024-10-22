import styles from "./page.module.css";
import Image from 'next/image';

import iconPix from '../../assets/icons/pix.svg'
import iconCreditCard from '../../assets/icons/credit_card.svg'
import iconEncrypted from '../../assets/icons/encrypted.svg'
import iconBarcode from '../../assets/icons/barcode.svg'
import iconCheck from '../../assets/icons/check.svg'

export default function CheckoutSection(){
    return(
        <div id="checkout" className={styles.checkout}>
            <div className={styles.checkoutCard}>
                <h1 className={styles.checkoutCardTitle}>MÉTODO MZ</h1>
                <h2 className={styles.checkoutCardSubTitle}>Oferta especial</h2>
                <h2 className={styles.CheckoutDe}>De R$1699,00, por apenas:</h2>
                <div className={styles.checkoutPrice}>
                    <h3 className={styles.priceH3}>12x de</h3>
                    <h1 className={styles.priceH1}>R$ 119,00</h1>
                </div>
                <h4 className={styles.checkoutAVista}>ou R$ 997,00 À VISTA</h4>
                <button className={styles.checkoutButton}>COMPRAR</button>
                <div className={styles.checkoutPaymentType}>
                    <Image src={iconPix} alt='Pix'/>
                    <Image src={iconCreditCard } alt='Cartão'/>
                    <Image src={iconBarcode } alt='Boleto'/>
                    <Image src={iconEncrypted } alt='Pagamento seguro'/>
                </div>
            </div>

            <div className={styles.checkoutAdvantages}>
                <h1>CONDIÇÃO EXCLUSIVA</h1>
                <h2>O que você recebe</h2>
                <div className={styles.checkoutIconLavel}>
                    <Image src={iconCheck} alt='Pix'/>
                    <h6>CURSO COMPLETO A NOVA COMUNICAÇÃO</h6>
                </div>
                <div className={styles.checkoutIconLavel}>
                    <Image src={iconCheck} alt='Pix'/>
                    <h6>BONUS LIVRO COMO FALAR BEM E ENCANTAR PESSOAS</h6>
                </div>
                <div className={styles.checkoutIconLavel}>
                    <Image src={iconCheck} alt='Pix'/>
                    <h6>BONUS CURSO MÉTODO CPA</h6>
                </div>
                <div className={styles.checkoutIconLavel}>
                    <Image src={iconCheck} alt='Pix'/>
                    <h6>BONUS AULA MASTER CREATOR</h6>
                </div>
                <div className={styles.checkoutIconLavel}>
                    <Image src={iconCheck} alt='Pix'/>
                    <h6>BONUS GRUPO EXCLUSIVO WHATSAPP</h6>
                </div>
            </div>
        </div>
    )
}