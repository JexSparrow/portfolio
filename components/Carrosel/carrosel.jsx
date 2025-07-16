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
import chatgpt from '../../src/assets/chatgpt.png';
import api2 from '../../src/assets/api2.png';
import vite from '../../src/assets/vite.png';
import git from '../../src/assets/git.png';
import github from '../../src/assets/github.png';
import scrum from '../../src/assets/scrum.png';
import kanban from '../../src/assets/kanban.png';
import ux from '../../src/assets/ux.png';

const tecnologias = [
    { nome: 'React', imagem: react },
    { nome: 'Vite', imagem: vite },
    { nome: 'JavaScript', imagem: js },
    { nome: 'CSS', imagem: css3 },
    { nome: 'HTML', imagem: html },
    { nome: 'Node', imagem: node },
    { nome: 'Postgres', imagem: postgres },
    { nome: 'MongoDB', imagem: mongo },
    { nome: 'Docker', imagem: docker },
    { nome: 'APIs REST', imagem: api2 },
    { nome: 'Git', imagem: git },
    { nome: 'Github', imagem: github },
    { nome: 'Figma', imagem: figma },
    { nome: 'Canva', imagem: canva },
    { nome: 'UX/UI', imagem: ux },
    { nome: 'Chat Gpt', imagem: chatgpt },
    { nome: 'Scrum', imagem: scrum },
    { nome: 'Kanban', imagem: kanban },





];

function Carrosel() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const wrapperRef = useRef(null);
    const animationSpeed = 1.25;
    const numeroDeTecnologias = tecnologias.length;
    const tecnologiasDuplicadas = [...tecnologias, ...tecnologias]; // Duplicado para efeito de loop infinito

    const h1Ref = useRef(null);
    const carrosselRef = useRef(null);
    const [h1IsVisible, setH1IsVisible] = useState(false);
    const [carrosselIsVisible, setCarrosselIsVisible] = useState(false);

    useEffect(() => {
        const currentH1Ref = h1Ref.current;
        const currentCarrosselRef = carrosselRef.current;

        const h1Observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setH1IsVisible(true);
                        h1Observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const carrosselObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCarrosselIsVisible(true);
                        carrosselObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (currentH1Ref) {
            h1Observer.observe(currentH1Ref);
        }
        if (currentCarrosselRef) {
            carrosselObserver.observe(currentCarrosselRef);
        }

        return () => {
            if (currentH1Ref) h1Observer.unobserve(currentH1Ref);
            if (currentCarrosselRef) carrosselObserver.unobserve(currentCarrosselRef);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setScrollPosition(prevPosition => {
                if (!wrapperRef.current) {
                    return prevPosition;
                }

                const nextPosition = prevPosition - animationSpeed;
                const wrapperScrollWidth = wrapperRef.current.scrollWidth;
                const resetThreshold = -wrapperScrollWidth / 2; // Uma volta completa da primeira leva de slides

                if (nextPosition <= resetThreshold) {
                    return 0;
                }
                return nextPosition;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [animationSpeed, numeroDeTecnologias]);

    return (
        <>
            <Conteiner>
                <Title ref={h1Ref} $isVisible={h1IsVisible}> Tecnologias Utilizadas </Title>

                <CarrosselContainer ref={carrosselRef} $isVisible={carrosselIsVisible}>
                    <CarrosselWrapper
                        ref={wrapperRef}
                        style={{ transform: `translateX(${scrollPosition}px)` }}

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
            </Conteiner>
        </>
    );
}

export default Carrosel;