import { BackgroundVideo, Conteiner, ConteinerVideoInfos, ProjetoDescricao, ProjetoDetalhes, ProjetoDetalhesContainer, ProjetoLink, ProjetoTitulo, Slide, Slider, SliderTrack, Title } from "./styles";
import css3 from '../../src/assets/css3.png';
import docker from '../../src/assets/docker.png';
import figma from '../../src/assets/figma.png';
import html from '../../src/assets/html.png';
import js from '../../src/assets/js.png';
import mongo from '../../src/assets/mongo.png';
import node from '../../src/assets/node.png';
import postgres from '../../src/assets/postgres.png';
import react from '../../src/assets/react.png';
import mario from '../../src/assets/mario.png';
import DevBurguer from '../../src/assets/Logo.svg'
import netflix from '../../src/assets/netflix.png'
import clima from '../../src/assets/clima.png'
import api from '../../src/assets/api.png'
import starbucks from '../../src/assets/starbucks.png'
import pig from '../../src/assets/pig.gif'
import apple from '../../src/assets/apple.png'
import spock from '../../src/assets/spock.png'
// import tesla from '../../src/assets/tesla.png'
import tesla3 from '../../src/assets/tesla3.png'
import dado1 from '../../src/assets/dado1.png'
import instagram from '../../src/assets/instagram.png'

import astro from '../../src/assets/astro.mp4'



// Atualize a sua lista de projetos para incluir título, descrição e link
const projetosInfo = [
    {
        src: tesla3,
        alt: "Tesla",
        titulo: "Experimente o Futuro em Movimento ⚡️",
        descricao: "✅ Design Futurista: Uma estética limpa e focada no essencial, que exala elegância e modernidade.✅ Animações Sutis e Envolventes: Elementos que deslizam e aparecem com fluidez, criando uma experiência visualmente agradável e intuitiva. ✅ Foco na Experiência do Usuário: Navegação simples e direta, com informações relevantes ao alcance de um clique.✅ Chamada para Ação Criativa: Botões de compra e test-drive que transformam a interação em um convite à experiência.Totalmente responsivo para dispositivos móveis!",
        link: "https://github.com/JexSparrow/Tesla",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js],
        videoId: "XQ2QHyjcAFU"
    },
    {
        src: instagram,
        alt: "Instagram",
        titulo: "Landing Page Instagram! 📱",
        descricao: "✅ Familiaridade Instantânea: O layout e os elementos visuais foram cuidadosamente inspirados na interface de login do Instagram, proporcionando uma sensação de reconhecimento imediato.✅ Loop de Imagens Envolvente: A transição suave entre as telas de demonstração do feed prende o olhar e adiciona um dinamismo sutil à página. ✅ Animação​: Um script simples em JavaScript controla a opacidade de duas imagens de demonstração, criando um efeito de fade-in e fade-out em loop, simulando a troca de telas dentro do aplicativo.Esta landing page não é apenas uma cópia estática; ela ganha vida com um toque de animação que captura a essência dinâmica do Instagram.É uma demonstração concisa de como a atenção aos detalhes visuais e a utilização estratégica de JavaScript podem enriquecer a experiência do usuário, mesmo em uma página de login.Página responsiva para dispositivos móveis!",
        link: "https://github.com/JexSparrow/instagram-login",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js, figma],
        videoId: "nDqIYHB6kFE"
    },
    {
        src: dado1,
        alt: "Sorteador",
        titulo: "Alguém falou em Sorteio? ✨",
        descricao: "Apresento um projeto simples, porém funcional e intuitivo: um sorteador de números personalizado que coloca o poder da probabilidade nas mãos do usuário. Com uma interface limpa construída em HTML e CSS, e a lógica dinâmica implementada em JavaScript, este projeto permite que os usuários definam um intervalo numérico (especificando um valor mínimo e um máximo) e, com um único clique, revelem um número aleatório dentro desse limite. É a ferramenta perfeita para sorteios rápidos, tomadas de decisão aleatórias ou simplesmente para testar a sua sorte!",
        link: "https://github.com/JexSparrow/Random",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js],
        videoId: "946h7DSGmQg"
    },
    {
        src: spock,
        alt: "Jokenpo",
        titulo: "Jokenpo com I.A",
        descricao: "Preparem-se para conhecer um projeto divertido e que demonstra minhas habilidades em desenvolvimento front-end: um clássico Jogo de Pedra, Papel e Tesoura totalmente interativo e responsivo! Construído com HTML para a estrutura fundamental, CSS para um visual atraente e intuitivo, e JavaScript para a lógica de jogo dinâmica, este projeto oferece uma experiência de usuário envolvente onde humanos podem desafiar a inteligência artificial (carinhosamente apelidada de 'Alexa' no código!).",
        link: "https://github.com/JexSparrow/Jokenpo",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js],
        videoId: "BT02A8_idO8"
    },
    {
        src: apple,
        alt: "Landing-Page-Apple",
        titulo: "Desvende o Universo iPhone",
        descricao: "✅ Paleta de Cores Dinâmica: Altere instantaneamente a cor de destaque da página (background, botão, título e borda do header) com seletores intuitivos.✅ Troca de Imagens Fluida: Visualize diferentes modelos de iPhone com uma simples mudança de imagem. ✅ Responsividade Inteligente: A página se adapta perfeitamente a telas mobile, com ajustes visuais sutis, como a inversão da imagem do celular e um sutil efeito de sombra no header .✅ Interatividade Sutil: Um efeito de 'girar' o iPhone ao interagir (mouse over/out) adiciona um toque dinâmico e convidativo na versão desktop.",
        link: "https://github.com/JexSparrow/Iphone14",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js, figma],
        videoId: "rSCTAOJ7d1w"
    },
    {
        src: pig,
        alt: "Conversor",
        titulo: "Conversor de Moedas💰",
        descricao: "✅ Cotações em Tempo Real: Conectado a uma API financeira confiável, o conversor busca as taxas de câmbio mais recentes, garantindo precisão nas conversões.✅ Suporte a Múltiplas Moedas: Converta entre Dólar, Euro, Libra, Bitcoin, Yuan e Real, oferecendo uma visão global do valor do seu dinheiro.✅ Seletores Intuitivos: Escolha facilmente as moedas de conversão através de menus dropdown claros e objetivos.✅ Visualização Instantânea: O valor convertido é atualizado automaticamente ao inserir o montante e selecionar as moedas desejadas.",
        link: "https://github.com/JexSparrow/Conversor",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js, api, figma],
        videoId: "fn0b224EacQ"
    },
    {
        src: starbucks,
        alt: "Starbucks-Landing-Page",
        titulo: " Uma Experiência Starbucks Interativa ☕",
        descricao: "Nesta página, os usuários podem personalizar sua própria 'Bebida Starbucks' visualmente, alterando dinamicamente as cores de elementos chave da interface e trocando a imagem do copo com apenas alguns cliques. É uma forma envolvente de demonstrar como a interatividade pode enriquecer a experiência do usuário e destacar a identidade visual de uma marca. O projeto demonstra como o JavaScript pode ser usado para criar elementos interativos que respondem diretamente às ações do usuário, tornando a experiência mais atrativa.",
        link: "https://exemplo.com/portfolio-html",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js, figma],
        videoId: "L37G1UPGVag"
    },
    {
        src: clima,
        alt: "Previsão-Clima",
        titulo: "Meu Site de Previsão Meteorológica Dinâmica! ☀️",
        descricao: " Nesse desenvolvi um site de previsão do tempo interativo, construído com a base sólida do HTML, a elegância do CSS e a inteligência do JavaScript, impulsionado por uma API de dados climáticos em tempo real. Esqueça as previsões estáticas! Este site permite que os usuários consultem as condições climáticas atuais de qualquer cidade do mundo, com informações atualizadas dinamicamente sobre temperatura, sensação térmica, descrição do tempo, umidade e até mesmo um ícone ilustrativo das condições. É como ter seu próprio meteorologista pessoal, sempre à disposição ",
        link: "https://github.com/JexSparrow/Previsao-Tempo",
        tecnologias: "HTML, CSS, JAVASCRIPT e API",
        img: [html, css3, js, api],
        videoId: "-EYDkKkEt1A"
    },
    {
        src: netflix,
        alt: "Netflix-Page",
        titulo: "Landing Page - Netflix",
        descricao: "Uma landing page inspirada na gigante do Streaming, ao abrir a página o usuário é recebido pelo som icõnico 'Tudum'. Um vídeo de fundo da série Stranger Things capta a atenção do usuário e com um toque no botão do som , o vídeo fica tela cheia e sem as informações de texto. Um carrosel mostra os pricipais lançamentos , para ficar antenado!",
        link: "https://github.com/JexSparrow/Netflix",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js],
        videoId: "G9AlWxAKwC0"
    },
    {
        src: DevBurguer,
        alt: "DevBurguer-Interface",
        titulo: "<DEV BURGUER/>",
        descricao: "No Front-end utilizei o React+Vite para criar a aplicação, com o objetivo de praticar a integração de algumas bibliotecas muito utilizadas.Para estilização dos componentes, utilizei o Styled-Components, o que me permitiu criar uma interface moderna e responsiva diretamente no JavaScript. Também foi utilizado o Axios para fazer a comunicação com a API, enviando as informações de login de forma simples e segura.Para a navegação entre as páginas, implementei o React Router DOM, permitindo o redirecionamento automático após o Login.",
        link: "https://github.com/JexSparrow/devburguer-interface",
        tecnologias: "HTML, CSS, JAVASCRIPT, REACT, NODE e BANCO DE DADOS",
        img: [html, css3, js, figma, react, node, postgres, mongo, docker],
        videoId: "L56P5vfA688"
    },
    {
        src: mario,
        alt: "Mario-Bros",
        titulo: "Landing Page - Mario Bros.",
        descricao: "Uma página interativa, totalmente responsiva para dispositivos móveis. Formulário e whatsapp para entrar em contato e tirar todas as dúvidas sobre nossos serviços",
        link: "https://github.com/JexSparrow/Mario",
        tecnologias: "HTML, CSS E JAVASCRIPT",
        img: [html, css3, js],
        videoId: "deo4fPfZ_cw"
    },
];

import { useState, useRef, useEffect, useCallback } from "react";

function Projetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);
    const [animacaoPausada, setAnimacaoPausada] = useState(false); // Novo estado
    const modalRef = useRef(null);
    const projetosRef = useRef(null); // Referência ao container principal

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

    return (
        <Conteiner ref={projetosRef}>

            <BackgroundVideo src={astro} autoPlay loop muted />

            <div>

                <Title>Projetos</Title>
            </div>

            <Slider>
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
                                ir para GitHub
                            </ProjetoLink>
                        </ProjetoDetalhes>

                    </ConteinerVideoInfos>


                </ProjetoDetalhesContainer>
            )}
        </Conteiner>
    );
}

export default Projetos;