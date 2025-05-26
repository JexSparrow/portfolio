import styled, { keyframes, css } from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%); /* Começa 100% fora da tela à esquerda */
    opacity: 0;
  }
  to {
    // Mantido 120% conforme sua definição original, mesmo que isso mova o elemento para fora da tela.
    transform: translateX(120%); /* Termina na posição original */
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%); /* Começa 100% fora da tela à direita */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* Termina na posição original */
    opacity: 1;
  }
`;

const fadeInBlur = keyframes`
  from {
    filter: blur(10px); /* Começa com um blur pesado */
    opacity: 0; /* E invisível */
  }
  to {
    filter: blur(0px); /* Termina sem blur */
    opacity: 1; /* E totalmente visível */
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute; /* Fixo na viewport */
  right: 0;
  bottom: 0;
  width: 100%; /* Garante que cubra toda a largura */
  height: 100%; /* Garante que cubra toda a altura */
  z-index: -2; /* Bem no fundo */
  object-fit: cover; /* Cobre a área, cortando se necessário, sem distorcer */
  pointer-events: none; /* Para garantir que não haja interações indesejadas com o vídeo em si */
  filter: brightness(0.5);
`;

// ANIMAÇÃO SCROLL MANTIDA EXATAMENTE COMO VOCÊ PEDIU
const scroll = keyframes`
  0% {
    transform: translateX(calc(-300px * 12));
  }
  100% {
    transform: translateX(calc(65px * 24)); /* Mantenho 65px aqui, mas observe que a lógica de loop perfeito geralmente usa o mesmo valor do 'from' ou a largura total de um set de slides negativos */
  }
`;

const shadowDance = keyframes`
  0%, 100% {
    text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
  }
  50% {
    text-shadow: -5px -5px 0 #00d4ff, -10px -10px 0 #ff005e;
  }
`;

export const Conteiner = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 5% 0;
  display: grid;
  place-items: center;
  gap: 5%;
  box-shadow: rgba(0, 0, 2, 0.95) 0px 50px 20px -15px inset, rgba(0, 0, 0, 0.95) 0px 50px 36px -50px inset;

  @media (max-width: 1000px){
    gap: 0;
    padding: 8% 0;
  }
`;

export const BoxTitle = styled.div`
  /* ... */
`;

export const Title = styled.h1`
  font-family: 'Orbitron';
  letter-spacing: 5px;
  font-size: 5rem;
  color: #fff;
  text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
  animation: ${shadowDance} 2s infinite; /* Usando o keyframe corrigido */
  transition: 200ms all ease-in-out;
  transform: translateX(100%); /* Começa 100% fora da tela à direita */
  opacity: 0;


  &:hover {
    scale: 1.05;
  }

  ${props => props.$isVisible && css`
    animation: ${slideInRight} 1.5s ease-out forwards;
    animation-delay: 500ms;
  `}

  @media (max-width: 800px){
    font-size: 4rem;
    text-shadow: 3px 3px 0 #ff005e, 6px 6px 0 #00d4ff;
  }

  @media (max-width: 500px){
    font-size: 2rem;
    text-shadow: 2px 2px 0 #ff005e, 4px 4px 0 #00d4ff;
  }
`;

export const Paragrafo = styled.p`
  color: #fff;
  font-family: 'Tektur';
  letter-spacing: 1px;
  font-size: 1.5rem;
  position: absolute; // Mantenho position: absolute; conforme sua solicitação.
  text-shadow: 1px 1px 1px #ff005e, 2px 2px 1px #00d4ff;
  transition: 200ms all ease-in-out;
  transform: translateX(-100%); /* Começa 100% fora da tela à direita */
  opacity: 0; 
  
  &:hover {
    scale: 1.05;
    color: yellow;
  }

  ${props => props.$isVisible && css`
    animation: ${slideInLeft} 1.5s ease-out forwards;
    animation-delay: 500ms;
  `}

  @media (max-width: 800px){
    font-size: 1.25rem;
  }
  @media (max-width: 500px){
    font-size: 0.75rem;
  }
`;

export const Slider = styled.div`
  width: 90%;
  height: 45vh;
  margin: auto;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  opacity: 0;
  filter: blur(10px);

  &::before,
  &::after {
    background: linear-gradient(to right, rgb(4, 4, 4) 0%, rgba(255, 255, 255, 0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    width: 5%;
    z-index: 2;
  }

  &::before {
    left: 0;
    top: 0;
  }

  &::after {
    right: -1px;
    top: 0;
    transform: rotateZ(180deg);
  }

  ${props => props.$isVisible && css`
    animation: ${fadeInBlur} 2s ease-out forwards;
    animation-delay: 100ms;
  `}
  
`;

export const SliderTrack = styled.div`
  display: flex;
  // Largura padrão para desktop (24 slides de 300px)
  width: calc(300px * 24);
  animation: ${scroll} 24s linear infinite; // Animação padrão para desktop
 

  // ============== Media Queries para o SliderTrack e Animação ==============

  // Defina uma variável local para a largura do slide em cada breakpoint
  // Assim, você usa o mesmo valor para 'width' e para o cálculo da animação.
  
  // Para telas menores que 1000px
  @media (max-width: 1000px) {
    ${({ $slideWidth = 250 }) => css` // Define a largura do slide para este breakpoint
      width: calc(${$slideWidth}px * 24);
      animation: ${scroll} 24s linear infinite; // A duração pode ser a mesma ou ajustada
      

      // Redefinir a animação para o novo tamanho do slide
      @keyframes ${scroll} {
        0% {
           transform: translateX(calc(-${$slideWidth}px * 12)); 
          }
        100% { transform: translateX(50px * 24);
         }
      }
    `}
  }

  // Para telas menores que 650px
  @media (max-width: 650px) {
    ${({ $slideWidth = 200 }) => css` // Define a largura do slide para este breakpoint
      width: calc(${$slideWidth}px * 24);
      animation: ${scroll} 25s linear infinite; // Ajustei a duração para um pouco mais rápido para slides menores
      

      // Redefinir a animação para o novo tamanho do slide
      @keyframes ${scroll} {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-${$slideWidth}px * 12)); }
      }
    `}
  }

  // Para telas menores que 480px
  @media (max-width: 480px) {
    ${({ $slideWidth = 150 }) => css` // Define a largura do slide para este breakpoint
      width: calc(${$slideWidth}px * 24);
      animation: ${scroll} 30s linear infinite; // Ajustei a duração para ser mais rápido
      

      // Redefinir a animação para o novo tamanho do slide
      @keyframes ${scroll} {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-${$slideWidth}px * 12)); }
      }
    `}
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px; /* Largura padrão do slide para desktop */
  padding: 15px;
  perspective: 100px;
  cursor: pointer;
  flex-shrink: 0;

  // Ajustes para o tamanho do Slide e Imagem em telas menores
  @media (max-width: 1000px) {
    width: 250px; /* O slide terá 250px de largura */
    height: 180px;
    padding: 12px;
    img {
      width: 65%; /* A imagem dentro do slide será 65% da nova largura do slide */
    }
  }

  @media (max-width: 650px) {
    width: 200px; /* O slide terá 200px de largura */
    height: 150px;
    padding: 10px;
    img {
      width: 50%; /* A imagem dentro do slide será 50% da nova largura do slide */
    }
  }
  
  @media (max-width: 480px) { /* Exemplo para telas ainda menores (celulares) */
    width: 150px; /* O slide terá 150px de largura */
    height: 120px;
    padding: 8px;
    img {
      width: 40%; /* A imagem será 40% da largura do slide */
    }
  }

  // Estilo da imagem dentro do Slide para desktop (padrão)
  img {
    width: 75%; /* Padrão desktop */
    transition: transform 1s;
  }

  & img:hover {
    transform: translateZ(20px);
  }
`;

export const ProjetoDetalhesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 10px; /* Adiciona um padding para não colar nas bordas em telas pequenas */
`;

export const ConteinerVideoInfos = styled.div`
  width: 95%;
  height: 85%;
  border-radius: 25px;
  background-color: rgba(144, 4, 204, 0.38);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  padding: 1%;
  box-shadow: #01FFFE 0px 0px 70px -20px inset,
              0px 0px 20px 0px #01FFFE;

  @media (max-width: 1000px){

    flex-direction: column;
    height: auto;
    padding: 1%;
    
  }
  `;

export const ConteinerVideo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2%;

width: 100%;
height: 100%;

h3 {
    font-family: 'Tektur';
    font-size: 40px;
    text-align: center;
    color: aliceblue;
    margin-bottom: 2%;
    letter-spacing: 2px;
    transition: 250ms all ease-in-out;

  &:hover {
    color: #01FFFE;
    scale: 0.95;
  }

  @media (max-width: 1000px){

      display: none;
    
  }

  }

  iframe {
    border: none;
    box-shadow: rgba(0, 255, 238, 0.51) 0px 0px 100px -20px;
    width: 100%; /* Padrão para desktop */
    height: 400px; /* Padrão para desktop */

     @media (max-width: 1000px){

      height: 270px;
      width: 60%;
  
  }

   @media (max-width: 800px){

      height: 220px;
      width: 60%;
    

  }

   @media (max-width: 650px){

      height: 220px;
      width: 70%;
    
    
  }

  
   @media (max-width: 500px){

      height: 180px;
      width: 90%;
    
    
  }
  }
 
  
  `;

export const ProjetoDetalhes = styled.div`
  height: 100%;
  max-width: 55%; /* Padrão para desktop */
  color: wheat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 4%;

  h3 {
    margin-top: 2%;
    font-family: 'Orbitron';
    font-size: 20px;
  }

  img {
    
    height: 76px;
    cursor: pointer;
    transition: 150ms all ease-in-out;


    @media (max-width: 1500px){
      height: 50px;
    }

    @media (max-width: 650px){
      height: 30px;
    }

    @media (max-width: 500px){
      height: 20px;
    }
  }

  & img:hover {
    scale: 1.1;
  }

  > div {
    
    h3 {
      
      @media (max-width: 1000px){
        font-size: 1em;
      }
    }
  }

  // Media Query para 1000px: Ocupa mais espaço em coluna
  @media (max-width: 1000px) {
    max-width: 95%; /* Ocupa quase toda a largura quando em coluna */
    height: auto; /* Altura automática */
    gap: 2%; /* Reduz o gap entre os elementos internos */
  }

  // Media Query para 650px
  @media (max-width: 650px) {
    gap: 1.5%;
  }

  // Media Query para 480px
  @media (max-width: 480px) {
    gap: 1%;
  }
`;

export const ProjetoTitulo = styled.h2`
  font-size: 2.75em; /* Padrão para desktop */
  font-family: 'Orbitron';
  letter-spacing: 2px;
  transition: 250ms all ease-in-out;

  &:hover {
    color: yellow;
  }

  // Media Query para 1000px
  @media (max-width: 1000px) {
    font-size: 1.8em; /* Diminui a fonte */
    margin-bottom: 10px; /* Adiciona um espaço */
  }

  // Media Query para 650px
  @media (max-width: 650px) {
    font-size: 1.6em;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  // Media Query para 480px
  @media (max-width: 480px) {
    font-size: 1.4em;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }
`;

export const ProjetoDescricao = styled.p`
  line-height: 95%; /* Padrão para desktop */
  text-align: left;
  white-space: pre-line;
  font-size: 1.4em; /* Padrão para desktop */
  font-family: 'Anta';
  margin-bottom: 10px; /* Espaçamento padrão */

   @media (max-width: 1450px) {
    font-size: 1.1em;
    line-height: 120%; /* Aumenta o line-height para melhor leitura em telas menores */
    margin-bottom: 4px;
  }

  // Media Query para 1000px
  @media (max-width: 1000px) {
    font-size: 1em;
    line-height: 120%; /* Aumenta o line-height para melhor leitura em telas menores */
    margin-bottom: 8px;
  }

  // Media Query para 650px
  @media (max-width: 650px) {
    font-size: 0.90em;
    line-height: 130%;
    margin-bottom: 6px;
  }

  // Media Query para 480px
  @media (max-width: 480px) {
    font-size: 0.85em;
    line-height: 140%;
    margin-bottom: 4px;
  }
`;

export const ProjetoLink = styled.a`
  font-family: 'Oxanium';
  font-size: 30px; /* Padrão para desktop */
  color: aliceblue;
  text-decoration: none;
  font-weight: bold;
  transition: 200ms all ease-in-out;
  margin: 0 auto;

  &:hover { scale: 1.15; color: #01FFFE; }
  &:active { scale: 0.90; }

  // Media Query para 1000px
  @media (max-width: 1000px) {
    font-size: 24px;
    margin-top: 10px; /* Adiciona um pouco de espaço acima */
  }

  // Media Query para 650px
  @media (max-width: 650px) {
    font-size: 20px;
    margin-top: 8px;
  }

  // Media Query para 480px
  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 5px;
  }
`;