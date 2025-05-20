import { useState, useEffect, useRef } from 'react';
import { CarrosselContainer, CarrosselWrapper, Conteiner, Slide, TecnologiaImagem, Title } from './styles';
import canva from '../../src/assets/canva.png';
import css3 from '../../src/assets/css3.png';
import docker from '../../src/assets/docker.png';
import figma from '../../src/assets/figma.png';
import html from '../../src/assets/html.png';
import js from '../../src/assets/js.png';
import mongo from '../../src/assets/mongo.png';
import node from '../../src/assets/node.png';
import postgres from '../../src/assets/postgres.png';
import react from '../../src/assets/react.png';

const tecnologias = [
    { nome: 'React', imagem: react },
    { nome: 'JavaScript', imagem: js },
    { nome: 'CSS', imagem: css3 },
    { nome: 'HTML', imagem: html },
    { nome: 'Figma', imagem: figma },
    { nome: 'Docker', imagem: docker },
    { nome: 'Node', imagem: node },
    { nome: 'Postgres', imagem: postgres },
    { nome: 'MongoDB', imagem: mongo },
    { nome: 'Canva', imagem: canva },
];

function Carrosel() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const wrapperRef = useRef(null);
    const animationSpeed = 1.25;
    const numeroDeTecnologias = tecnologias.length;
    const tecnologiasDuplicadas = [...tecnologias, ...tecnologias];

    const h1Ref = useRef(null);
    const carrosselRef = useRef(null);
    const [h1IsVisible, setH1IsVisible] = useState(false);
    const [carrosselIsVisible, setCarrosselIsVisible] = useState(false);

    useEffect(() => {
        // Captura os valores atuais dos refs no início do efeito
        // Isso resolve o aviso do ESLint sobre refs em funções de cleanup
        const currentH1Ref = h1Ref.current;
        const currentCarrosselRef = carrosselRef.current;

        // Observer para o h1
        const h1Observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setH1IsVisible(true);
                        h1Observer.unobserve(entry.target); // Para disparar a animação apenas uma vez
                    }
                });
            },
            { threshold: 0.5 } // Sugestão para teste: anima com 10% visível
        );

        // Observer para o CarrosselContainer
        const carrosselObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCarrosselIsVisible(true);
                        carrosselObserver.unobserve(entry.target); // Para disparar a animação apenas uma vez
                    }
                });
            },
            { threshold: 0.5 } // Sugestão para teste: anima com 10% visível (era 0.85)
        );

        // Observa os elementos se eles existirem
        if (currentH1Ref) {
            h1Observer.observe(currentH1Ref);
        }
        if (currentCarrosselRef) {
            carrosselObserver.observe(currentCarrosselRef);
        }

        // Cleanup function para desconectar os observers quando o componente desmontar
        return () => {
            if (currentH1Ref) h1Observer.unobserve(currentH1Ref);
            if (currentCarrosselRef) carrosselObserver.unobserve(currentCarrosselRef);
        };
    }, []); // As dependências estão vazias porque os observers e refs não mudam entre renderizações

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setScrollPosition(prevPosition => {
                // Adicionada verificação para wrapperRef.current para evitar erros
                if (!wrapperRef.current) {
                    return prevPosition; // Retorna a posição anterior se o ref for nulo
                }

                const nextPosition = prevPosition - animationSpeed;
                const singleWidth = wrapperRef.current.offsetWidth / tecnologiasDuplicadas.length;
                const resetThreshold = -singleWidth * numeroDeTecnologias;

                if (nextPosition <= resetThreshold) {
                    return 0;
                }
                return nextPosition;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [animationSpeed, numeroDeTecnologias, tecnologiasDuplicadas.length]); // Dependências da animação

    return (
        <Conteiner>
            <Title ref={h1Ref} $isVisible={h1IsVisible}> Tecnologias Utilizadas </Title>

            <CarrosselContainer ref={carrosselRef} $isVisible={carrosselIsVisible}>
                <CarrosselWrapper
                    ref={wrapperRef}
                    style={{ transform: `translateX(${scrollPosition}px)` }}
                    totalWidth={200}
                >
                    {tecnologiasDuplicadas.map((tec, index) => (
                        <Slide
                            key={index}
                            totalSlides={tecnologiasDuplicadas.length}
                        >
                            <TecnologiaImagem src={tec.imagem} alt={tec.nome} />
                            <p>{tec.nome}</p>
                        </Slide>
                    ))}
                </CarrosselWrapper>
            </CarrosselContainer>
        </Conteiner >
    );
}

export default Carrosel;