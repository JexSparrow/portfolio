import { BackgroundVideo, BoxTitle, Conteiner, ConteinerVideoInfos, Paragrafo, ProjetoDescricao, ProjetoDetalhes, ProjetoDetalhesContainer, ProjetoLink, ProjetoTitulo, Slide, Slider, SliderTrack, Title } from "./styles";
import astro from '../../src/assets/astro.mp4'
import { projetosInfo } from "../../src/utils/projetosInfo";
import { useState, useRef, useEffect, useCallback } from "react";

function Projetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);
    const [animacaoPausada, setAnimacaoPausada] = useState(false); // Novo estado
    const modalRef = useRef(null);
    const projetosRef = useRef(null); // Referência ao container principal

    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const sliderRef = useRef(null);
    const [h1IsVisible, setH1IsVisible] = useState(false);
    const [pIsVisible, setpIsVisible] = useState(false);
    const [sliderIsVisible, setSliderIsVisible] = useState(false);

    const handleImageClick = useCallback((projeto) => {
        setProjetoSelecionado(projeto);
        setAnimacaoPausada(true); // Pausa a animação ao clicar
    }, [setProjetoSelecionado, setAnimacaoPausada]);

    const handleClickOutside = useCallback((event) => {
        if (projetoSelecionado && modalRef.current && !modalRef.current.contains(event.target) && projetosRef.current && projetosRef.current.contains(event.target)) {
            setProjetoSelecionado(null);
            setAnimacaoPausada(false); // Retoma a animação ao fechar a modal
        }
    }, [projetoSelecionado, setProjetoSelecionado, setAnimacaoPausada]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        if (projetosRef.current) {
            projetosRef.current.id = 'projetos'; // Define o ID da seção de projetos
        }
    }, []);

    useEffect(() => {
        // Captura os valores atuais dos refs no início do efeito
        // Isso resolve o aviso do ESLint sobre refs em funções de cleanup
        const currentH1Ref = h1Ref.current;
        const currentPRef = pRef.current;
        const currentSliderRef = sliderRef.current;

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
        const pObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setpIsVisible(true);
                        pObserver.unobserve(entry.target); // Para disparar a animação apenas uma vez
                    }
                });
            },
            { threshold: 0.5 } // Sugestão para teste: anima com 10% visível (era 0.85)
        );

        const sliderObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSliderIsVisible(true);
                        sliderObserver.unobserve(entry.target); // Para disparar a animação apenas uma vez
                    }
                });
            },
            { threshold: 0.5 } // Sugestão para teste: anima com 10% visível
        );

        // Observa os elementos se eles existirem
        if (currentH1Ref) {
            h1Observer.observe(currentH1Ref);
        }
        if (currentPRef) {
            pObserver.observe(currentPRef);
        }
        if (currentSliderRef) {
            sliderObserver.observe(currentSliderRef);
        }

        // Cleanup function para desconectar os observers quando o componente desmontar
        return () => {
            if (currentH1Ref) h1Observer.unobserve(currentH1Ref);
            if (currentPRef) pObserver.unobserve(currentPRef);
            if (currentSliderRef) sliderObserver.unobserve(currentSliderRef);
        };
    }, []); // As dependências estão vazias porque os observers e refs não mudam entre renderizações

    return (
        <Conteiner ref={projetosRef}>

            <BackgroundVideo src={astro} autoPlay loop muted />

            <BoxTitle>

                <Title ref={h1Ref} $isVisible={h1IsVisible}>Projetos</Title>
                <Paragrafo ref={pRef} $isVisible={pIsVisible}>Clique e Confira</Paragrafo>

            </BoxTitle>


            <Slider ref={sliderRef} $isVisible={sliderIsVisible}>
                <SliderTrack style={{ animationPlayState: animacaoPausada ? 'paused' : 'running' }}>
                    {projetosInfo.map((projeto, index) => (
                        <Slide key={index}>
                            <img
                                src={projeto.src}
                                alt={projeto.alt}
                                onClick={() => handleImageClick(projeto)}
                            />
                        </Slide>
                    ))}
                </SliderTrack>
            </Slider>

            {projetoSelecionado && (
                <ProjetoDetalhesContainer>

                    <ConteinerVideoInfos>
                        {projetoSelecionado.videoId && (
                            <div>
                                <h3 style={{ textAlign: 'center', color: 'wheat', fontSize: '40px' }}>Vídeo de Demonstração</h3>
                                <iframe
                                    style={{ borderRadius: "25px" }}
                                    width="720"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${projetoSelecionado.videoId}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        <ProjetoDetalhes ref={modalRef}>

                            <ProjetoTitulo>{projetoSelecionado.titulo}</ProjetoTitulo>
                            <ProjetoDescricao>{projetoSelecionado.descricao}</ProjetoDescricao>
                            <div>
                                <h3>{projetoSelecionado.tecnologias}</h3>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
                                    {projetoSelecionado.img && projetoSelecionado.img.map((imgSrc, index) => (
                                        <img key={index} src={imgSrc} alt={`Tecnologia ${index + 1}`} />
                                    ))}
                                </div>
                            </div>

                            <ProjetoLink href={projetoSelecionado.link} target="_blank" rel="noopener noreferrer">
                                Ir para GitHub
                            </ProjetoLink>

                        </ProjetoDetalhes>

                    </ConteinerVideoInfos>


                </ProjetoDetalhesContainer>
            )}
        </Conteiner>
    );
}

export default Projetos;