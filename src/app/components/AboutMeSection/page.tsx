import styles from "./page.module.css";

export default function AboutMeSection(){
    return(
        <div id="aboutMe" className={styles.aboutMe}>
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

            <div className={styles.containerAboutMePhoto}></div>
        </div>
    )
}