import { useState, useEffect, useRef } from 'react';
import { CarrosselContainer, CarrosselWrapper, Conteiner, Slide, TecnologiaImagem } from './styles';
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

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setScrollPosition(prevPosition => {
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
    }, [animationSpeed, numeroDeTecnologias, tecnologiasDuplicadas.length]);

    return (
        <Conteiner>

            <h1>Tecnologias Utilizadas</h1>

            <CarrosselContainer>
                <CarrosselWrapper
                    ref={wrapperRef}
                    style={{ transform: `translateX(${scrollPosition}px)` }}
                    totalWidth={tecnologiasDuplicadas.length * (100 / numeroDeTecnologias)}
                >
                    {tecnologiasDuplicadas.map((tec, index) => (
                        <Slide
                            key={index}
                            // style={{ backgroundColor: tec.cor }}
                            totalSlides={tecnologiasDuplicadas.length}
                        >
                            <TecnologiaImagem src={tec.imagem} alt={tec.nome} />
                            <p>{tec.nome}</p>
                        </Slide>
                    ))}
                </CarrosselWrapper>
            </CarrosselContainer>
        </Conteiner>

    )
}




export default Carrosel;