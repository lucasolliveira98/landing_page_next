import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.initialPage}>
          <div className={styles.container}>
            <h1 className={styles.h1}>Conquiste sua liberdade financeira</h1>
            <h3 className={styles.h3}>Loren ipsun aksleish opsin iptnond nodejs  Loren ipsun aksleish opsin iptnond nodejs  Loren ipsun aksleish opsin iptnond nodejs </h3>
            <button className={styles.button}>Comprar agora</button>
          </div>
        </div>

        <div className={styles.aboutMe}>
          <div className={styles.aboutMeContainer}>
            <h1 className={styles.aboutMeTitle}>Conheçam um pouco sobre minha história</h1>
            <p className={styles.aboutMeBody}>Meu nome é Gabriel Queiroz Mozaner, tenho 24 anos
            <br />
            Aos meus 17 anos minha família quebrou, e eu precisei me virar, trabalhei como balconista, atendente, já trabalhei na recepção. 
            <br /><br />
            Trabalhei em 3 funções vendedor, recepção e Recursos humanos. 
            em um único lugar para ganhar 1.000 reais. 
            <br />
            Já fui vendedor PAP 
            <br />
            Vendia de porta em porta.
            <br />
            Tudo isso eu já fiz, mas nunca me conformei em trabalhar 8h por dia ou até mesmo 12h por dia.
            <br />Para ganhar um salário, que no final das contas não passa de um valor risório. 
            <br /><br />
            Foi aí então…. Que em 2021 Eu tive uma depressão e não queria mais viver, mas Deus colocou pessoas no meu caminho que me apresentaram esse mercado incrível de opções binárias. 
            O mercado a onde Deus me deu uma graça e sabedoria para trabalhar, foi aí então…. Que através de um empréstimo em nome de outra pessoa, eu paguei a mentoria de um rapaz, e comprei meu primeiro notebook. 
            <br />
            Foi ali que tudo começou no meu primeiro mês eu fiz 4 mil reais ( valor do empréstimo ) 
            <br />
            Segundo mês Eu fiz 7 mil reais 
            <br />
            Terceiro mês eu fiz 9.900 reais.
            <br /><br />
            E quando eu fiz esse valor no terceiro mês, eu sai do CLT 
            <br />
            E comecei a viver 100% do mercado financeiro de opções binárias, em 3 anos nesse mercado, mudei a vida dos meus pais, dos meus irmãos e das pessoas que eu amo, hoje faço quase 6 dígitos mensal e pela graça de Deus venho aqui apresentar esse mercado para vocês, que através desse mercado, Deus mudou a minha vida por completo.</p>
          </div>
        </div>

        <div className={styles.advantages}>
          <div className={styles.container}>
            <h1 className={styles.h1}>Conquiste sua liberdade financeira</h1>
            <h3 className={styles.h3}>Loren ipsun aksleish opsin iptnond nodejs  Loren ipsun aksleish opsin iptnond nodejs  Loren ipsun aksleish opsin iptnond nodejs </h3>
          </div>
        </div>
    </main>
  );
}
