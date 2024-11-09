import styles from "./page.module.css";

export default function AboutMeSection(){
    return(
        <div id="aboutMe" className={styles.aboutMe}>
            <div className={styles.containerAboutMe}>
                <h1 className={styles.aboutMeTitle}>Conheçam um pouco sobre minha história</h1>
                <div className={styles.containerTextAboutMe}>
                <p className={styles.aboutMeBody}>
                    Meu nome é <strong>Lucas Oliveira</strong>, tenho 26 anos e venho de uma pequena cidade do interior. Desde cedo, aprendi que a vida pode ser dura, mas nunca desisti de buscar meus sonhos.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Aos 17 anos, minha família enfrentou dificuldades financeiras, e eu precisei arregaçar as mangas. Comecei trabalhando como balconista em uma padaria local. Nas madrugadas, atendia clientes enquanto equilibrava os estudos e a preocupação com as contas de casa.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Passei por diversas funções, de vendedor a recepcionista, e até cheguei a trabalhar em Recursos Humanos em uma pequena empresa de minha cidade. Fazia o trabalho de três pessoas, mas o salário era de apenas 1.000 reais.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Em certo momento, me vi como vendedor PAP (Porta a Porta), batendo de porta em porta, oferecendo produtos e serviços, enfrentando muitas recusas, mas cada "não" que eu recebia só me deixava mais determinado.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Porém, apesar de tanto esforço, eu sentia que não estava evoluindo. Trabalhar 8, às vezes 12 horas por dia, por um salário mínimo, era frustrante. Me perguntava se era aquilo que queria para minha vida.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Em 2021, me vi em um momento difícil. Uma fase de depressão, sentindo que nada fazia sentido. Mas, então, algo inesperado aconteceu: conheci pessoas que me apresentaram um mercado até então desconhecido para mim — o mundo dos investimentos e das opções binárias.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Curioso e cheio de dúvidas, decidi apostar tudo o que tinha, ou melhor, o que eu não tinha. Peguei um empréstimo em nome de um amigo próximo, confiando no potencial daquela oportunidade. Com esse dinheiro, investi em uma mentoria e comprei meu primeiro notebook usado.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    E foi ali, naquele quarto pequeno e mal iluminado, que tudo começou. Dediquei-me intensamente ao aprendizado. No primeiro mês, consegui recuperar o valor do empréstimo, fazendo 4 mil reais. No segundo mês, cheguei a 7 mil reais, e no terceiro mês, quase alcancei os 10 mil reais.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Aquilo mudou minha vida. Decidi sair do emprego CLT e me dedicar integralmente ao mercado financeiro. Em três anos, transformei minha vida e a vida da minha família. Consegui proporcionar conforto para meus pais e irmãos, algo que sempre sonhei.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Hoje, graças a Deus e ao meu esforço, faço quase 6 dígitos mensais. Venho compartilhar essa história não para me gabar, mas para mostrar que, com determinação e fé, é possível mudar o rumo da nossa vida.
                </p>
                <br />
                <p className={styles.aboutMeBody}>
                    Estou aqui para apresentar essa oportunidade a todos que estão buscando um novo caminho. O mercado financeiro transformou minha vida, e acredito que ele pode transformar a sua também.
                </p>
                </div>
            </div>

            <div className={styles.containerAboutMePhoto}></div>
        </div>
    )
}