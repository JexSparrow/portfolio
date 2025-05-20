import styled, { keyframes, css } from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%); /* Começa 100% fora da tela à esquerda */
    opacity: 0;
  }
  to {
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

const scroll = keyframes`
  0% {
    transform: translateX(calc(-300px * 12));
  }
  100% {
    transform: translateX(calc(60px * 24));
  }
`;

// Corrigido nome do keyframe: removemos o hífen
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
  min-height: 100vh;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 2, 0.95) 0px 50px 20px -15px inset, rgba(0, 0, 0, 0.95) 0px 50px 36px -50px inset;
`;

export const BoxTitle = styled.div`

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
`;

export const Paragrafo = styled.p`
  color: #fff;
  font-family: 'Tektur';
  letter-spacing: 1px;
  font-size: 22px;
  position: absolute;
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
`;



export const Slider = styled.div`
  width: 90%; /* Corrigido: % */
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


    /* Aplica a animação condicionalmente com base na prop '$isVisible' */
    ${props => props.$isVisible && css`
      animation: ${fadeInBlur} 2s ease-out forwards;
      animation-delay: 100ms;
    `}
`;

export const SliderTrack = styled.div`
  display: flex;
  width: calc(300px * 24);
  animation: ${scroll} 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
  align-items: center;
  padding: 15px;
  perspective: 100px;
  cursor: pointer;

  img {
    width: 75%; /* Corrigido: % */
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
  width: 100%; /* Corrigido: % */
  height: 100%; /* Corrigido: % */
  background-color: rgba(0, 0, 0, 0.8); /* Fundo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Garante que fique acima do carrossel */
`;

export const ConteinerVideoInfos = styled.div`
  width: 95%; /* Corrigido: % */
  height: 88vh;
  border-radius: 25px;
  background-color: rgba(144, 4, 204, 0.38); /* Escolha suas cores e direção */
  backdrop-filter: blur(5px); /* Ajuste o valor do blur conforme desejado */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%; /* Corrigido: % */
  padding: 1%; /* Corrigido: % */
  box-shadow: #01FFFE 0px 0px 70px -20px inset,
              0px 0px 20px 0px #01FFFE;

  h3 {
    font-family: 'Tektur';
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  iframe {
    border: none;
    box-shadow: rgba(0, 255, 238, 0.51) 0px 0px 100px -20px;
  }
`;

export const ProjetoDetalhes = styled.div`
  height: 100%; /* Corrigido: % */
  max-width: 50%; /* Corrigido: % */
  color: wheat;
  position: relative; /* Para posicionar elementos internos, se necessário */
  display: flex;
  flex-direction: column; /* Corrigido: flex-direction */
  justify-content: center;
  text-align: center;
  gap: 4%; /* Corrigido: % */

  h3 {
    font-family: 'Orbitron';
    font-size: 20px;
  }

  img {
    height: 76px;
    cursor: pointer;
    transition: 150ms all ease-in-out;
  }

  & img:hover {
    scale: 1.1;
  }
`;

export const ProjetoTitulo = styled.h2`
  font-size: 2.75em;
  font-family: 'Orbitron';
  letter-spacing: 2px;
  transition: 250ms all ease-in-out;

  &:hover {
    color: yellow;
  }
`;

export const ProjetoDescricao = styled.p`
  line-height: 95%; /* Corrigido: % */
  text-align: left;
  white-space: pre-line;
  font-size: 1.4em;
  font-family: 'Anta';
`;

export const ProjetoLink = styled.a`
  font-family: 'Oxanium';
  font-size: 30px;
  color: aliceblue;
  text-decoration: none;
  font-weight: bold;
  transition: 200ms all ease-in-out;
  margin: 0 auto;

  &:hover {
    scale: 1.15;
    color: #01FFFE;
  }

  &:active {
    scale: 0.90;
  }
`;