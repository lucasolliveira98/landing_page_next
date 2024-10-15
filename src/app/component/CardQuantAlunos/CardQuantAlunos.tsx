'use client'
import styles from './CardQuantAlunos.module.css'
import { useEffect, useRef, useState } from 'react'

export default function CardQuantAlunos() {
    const [quantAlunos, setQuantAlunos] = useState(0);
    const advantagesRef = useRef<HTMLDivElement | null>(null); // Referência para a div principal
    const [upNumberClass, setUpNumberClass] = useState(false); // Estado para a classe upNumber

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null; // Variável para armazenar o intervalo

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Se o elemento estiver visível
                    setUpNumberClass(true); // Adiciona a classe upNumber

                    // Inicia o intervalo se ainda não estiver em execução
                    if (!intervalId) {
                        intervalId = setInterval(() => {
                            setQuantAlunos((preview) => {
                                if (preview < 500) {
                                    return preview + 2;
                                } else {
                                    clearInterval(intervalId!); // Limpa o intervalo quando atingir 500
                                    intervalId = null; // Reseta a referência do intervalo
                                    return preview; // Mantém o valor em 500
                                }
                            });
                        }, 0); // Definindo intervalo de 10ms para incrementar
                    }
                } else {
                    // Se o elemento estiver invisível
                    setQuantAlunos(0); // Reseta o valor para 1
                    setUpNumberClass(false); // Remove a classe upNumber

                    // Limpa o intervalo quando o elemento não está mais visível
                    if (intervalId) {
                        clearInterval(intervalId);
                        intervalId = null; // Reseta a referência do intervalo
                    }
                }
            });
        });

        // Inicia a observação da div principal
        if (advantagesRef.current) {
            observer.observe(advantagesRef.current);
        }

        // Limpa o observer e o intervalo ao desmontar o componente
        return () => {
            if (advantagesRef.current) {
                observer.unobserve(advantagesRef.current);
            }
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return (
        <div
            className={styles.advantagesQuantAlunos}
            ref={advantagesRef} // Aplicando a referência aqui
        >
            <h1 className={`${styles.advantagesNumber} ${upNumberClass ? styles.upNumber : ''}`}>
                {quantAlunos}+
            </h1>
            <h1 className={styles.advantagesTitleAlunos}>Alunos</h1>
        </div>
    );
}
