import styled, { keyframes, css } from "styled-components";

// Keyframes para o conteúdo vindo da esquerda
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%); /* Começa 100% fora da tela à esquerda */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* Termina na posição original */
    opacity: 1;
  }
`;

// Keyframe para o CarrosselContainer e Title tirar o blur e aparecer
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

export const Conteiner = styled.div`
  background-color: black;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10%;
`;

export const Title = styled.h1`
  font-family: 'Orbitron';
  letter-spacing: 5px;
  font-size: 50px;
  color: aliceblue;
  text-shadow: 2px 2px 1px #ff005e, 3px 3px 1px #00d4ff;
  transition: 200ms all ease-in-out;
  transform: translateX(-100%);
  opacity: 0;

  &:hover {
    scale: 1.05;
  }

  // A animação do Título é disparada pela prop '$isVisible'
  ${props => props.$isVisible && css`
    animation: ${slideInLeft} 1.5s ease-out forwards;
    animation-delay: 800ms;
  `}
`;

export const CarrosselContainer = styled.div`
  width: 90%; /* Corrigido: sem espaço no % */
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  height: 100%;
  opacity: 0;
  filter: blur(10px);

  /* Aplica a animação condicionalmente com base na prop '$isVisible' */
  ${props => props.$isVisible && css`
    animation: ${fadeInBlur} 1.5s ease-out forwards;
    animation-delay: 500ms;
  `}
`;

export const CarrosselWrapper = styled.div`
  display: flex;
  width: ${props => props.totalWidth}%;
  transform: translateX(${props => props.translateX}px);
  gap: 50px;
  border-radius: 25px;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column; /* Coloca a imagem acima do texto */
  justify-content: center;
  align-items: center;
  width: ${props => 100 / (props.totalSlides / 2)}%;
  min-width: auto; /* Corrigido: min-width: auto; */
  gap: 5%; /* Corrigido: gap: 5%; */
  
  p {
    font-family: 'Anta';
    font-size: 1.5em; /* Reduzi um pouco a fonte do texto para dar espaço à imagem */
    color: wheat;
    font-weight: bold;
  }
`;

export const TecnologiaImagem = styled.img`
  height: 100%; /* Corrigido: height: 100%; */
  min-width: 100%; /* Corrigido: min-width: 100%; */
  margin-bottom: 10px; /* Espaço entre a imagem e o texto */
`;