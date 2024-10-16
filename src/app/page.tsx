import photoAluno1 from './assets/image_1.jpeg'
import photoAluno2 from './assets/image_2.jpeg'
import photoAluno3 from './assets/image_3.jpeg'
import photoAluno4 from './assets/image_4.jpeg'
import photoAluno5 from './assets/image_2.jpeg'

import iconPix from './assets/icons/pix.svg'
import iconCreditCard from './assets/icons/credit_card.svg'
import iconEncrypted from './assets/icons/encrypted.svg'
import iconBarcode from './assets/icons/barcode.svg'
import iconCheck from './assets/icons/check.svg'

import Image from 'next/image';
import CardQuantAlunos from "./component/CardQuantAlunos/CardQuantAlunos";
import ProfileCard from "./component/ProfileCard/ProfileCard";
import styles from "./page.module.css";
import { Footer } from './component/Footer/Footer'

export default function Home() {

    return (

        <main className={styles.main}>

            <div className={styles.initialPage}>
                <div className={styles.containerInitialPage}>
                    <div className={styles.header}>
                        <h3 className={styles.itemHeader}>Minha história</h3>
                        <h3 className={styles.itemHeader}>Vantagens</h3>
                        <h3 className={styles.itemHeader}>Feedback</h3>
                        <h3 className={styles.itemHeader}>Checkout</h3>
                    </div>
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

            <div className={styles.aboutMe}>
                <div className={styles.containerAboutMe}>
                    <h1 className={styles.aboutMeTitle}>Conheçam um pouco sobre minha história</h1>
                    <div className={styles.containerTextAboutMe}>
                        <p className={styles.aboutMeBody} >Meu nome é Gabriel Queiroz Mozaner, tenho 24 anos.</p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Aos meus 17 anos minha família quebrou, e eu precisei me virar, trabalhei como balconista, atendente, já trabalhei na recepção.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Trabalhei em 3 funções: vendedor, recepção e Recursos Humanos, em um único lugar para ganhar 1.000 reais.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >Já fui vendedor PAP. Vendia de porta em porta.</p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Tudo isso eu já fiz, mas nunca me conformei em trabalhar 8h por dia ou até mesmo 12h por dia, para ganhar um salário que, no final das contas, não passa de um valor irrisório.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Foi aí então que, em 2021, eu tive uma depressão e não queria mais viver, mas Deus colocou pessoas no meu caminho que me apresentaram esse mercado incrível de opções binárias.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            O mercado onde Deus me deu graça e sabedoria para trabalhar. Foi aí então que, através de um empréstimo em nome de outra pessoa, eu paguei a mentoria de um rapaz e comprei meu primeiro notebook.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Foi ali que tudo começou. No meu primeiro mês eu fiz 4 mil reais (valor do empréstimo).
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            No segundo mês eu fiz 7 mil reais. No terceiro mês eu fiz 9.900 reais.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            E quando eu fiz esse valor no terceiro mês, eu saí do CLT e comecei a viver 100% do mercado financeiro de opções binárias. Em 3 anos nesse mercado, mudei a vida dos meus pais, dos meus irmãos e das pessoas que eu amo.
                        </p>
                        <br />
                        <p className={styles.aboutMeBody} >
                            Hoje faço quase 6 dígitos mensais e, pela graça de Deus, venho aqui apresentar esse mercado para vocês, que através desse mercado, Deus mudou a minha vida por completo.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.advantages}>
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

            <div className={styles.feedBack}>
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

            <div className={styles.checkout}>

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

            <Footer />
        </main>
    );
}
