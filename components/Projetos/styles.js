import styled, { keyframes, css } from 'styled-components';
import { projetosInfo } from '../../src/utils/projetosInfo';

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

const scroll = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
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
  width: 100%;
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
  /* Ajuste a largura base do SliderTrack para que os slides fiquem mais próximos */
  width: calc(350px * ${projetosInfo.length * 2}); /* Diminuído de 450px para 350px */
  animation: ${scroll} 40s linear infinite;

  @media (max-width: 1000px) {
    width: calc(300px * ${projetosInfo.length * 2}); /* Diminuído de 375px para 300px */
  }

  @media (max-width: 650px) {
    width: calc(250px * ${projetosInfo.length * 2}); /* Diminuído de 300px para 250px */
  }

  @media (max-width: 480px) {
    width: calc(180px * ${projetosInfo.length * 2}); /* Diminuído de 225px para 180px */
  }
`;

export const Slide = styled.div`
  flex-shrink: 0;
  /* Ajuste a largura de cada Slide individualmente */
  width: 350px; /* Diminuído de 450px para 350px */

  @media (max-width: 1000px) {
    width: 300px; /* Diminuído de 375px para 300px */
  }

  @media (max-width: 650px) {
    width: 250px; /* Diminuído de 300px para 250px */
  }

  @media (max-width: 480px) {
    width: 180px; /* Diminuído de 225px para 180px */
  }


  img {
    /* Ajustes para as imagens dentro do slide */
    height: 200px; /* **Aumentado para que as imagens fiquem maiores em desktop** */
    width: auto; /* Mantém a proporção */
    max-width: 260px; /* **Aumentado para que as imagens fiquem maiores em desktop** */
    object-fit: contain; /* Garante que a imagem caiba sem cortar, mantendo a proporção */
    cursor: pointer;
    transition: 150ms all ease-in-out;
    display: block; /* Garante que o img se comporte como um bloco para o margin: auto */
    margin: 0 auto; /* Centraliza a imagem dentro do Slide */
    transition: 300ms all ease-in-out;

    &:hover {

      scale: 1.1;

    }

    @media (max-width: 1500px){
      height: 140px;
      max-width: 200px;
    }

    @media (max-width: 1000px) { /* Adicionado este breakpoint específico para imagem */
      height: 120px;
      max-width: 160px;
    }

    @media (max-width: 650px){
      height: 90px;
      max-width: 120px;
    }

    @media (max-width: 500px){
      height: 80px;
      max-width: 120px;
    }
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
    height: 76px; /* Altura padrão para desktop */
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