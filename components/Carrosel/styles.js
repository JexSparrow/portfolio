import styled, { keyframes, css } from "styled-components";

const slideInLeft = keyframes`
  from {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
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

  padding: 2.5% 0; 
  background-color: black;
  height: 100%;
  /* AJUSTE AQUI: Remove min-height: 100vh para que se ajuste ao conteúdo */
  /* Se você quiser um mínimo para garantir que o carrossel apareça, use um valor em px, ex: min-height: 400px; */
  /* Mas para "ajustar ao conteúdo", não defina uma altura mínima grande. */
  /* min-height: 100vh; */ /* LINHA REMOVIDA/COMENTADA */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  gap: 40px; /* Mantido em px */
  box-shadow: 0px 10px 20px black inset;

`;

export const Title = styled.h1`
  font-family: 'Orbitron';
  letter-spacing: 5px;
  font-size: 50px;
  text-align: center;
  color: aliceblue;
  text-shadow: 2px 2px 1px #ff005e, 3px 3px 1px #00d4ff;
  transition: 300ms all ease-in-out;
  transform: translateX(-100%);
  opacity: 0;
  will-change: transform, opacity;

  ${props => props.$isVisible && css`
    animation: ${slideInLeft} 2s ease-out forwards;
    animation-delay: 800ms;
  `}

  &:hover {
    scale: 1.05;
  }

  @media (max-width: 800px) {
    font-size: 2.5em;
    letter-spacing: 3px;
    transform: none;
    
  }
  @media (max-width: 500px){
    font-size: 1.8em;
    letter-spacing: 2px;
        transform: none;

    
  }

  
`;

export const CarrosselContainer = styled.div`
  width: 90%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  
  /* Mantendo altura controlada, mas você pode ajustar se o conteúdo ficar muito apertado */
  height: 100%;

  opacity: 0;
  filter: blur(10px);

  ${props => props.$isVisible && css`
    animation: ${fadeInBlur} 1.5s ease-out forwards;
    animation-delay: 500ms;
  `}

  @media (max-width: 768px) {
  
    width: 90%;
  }
 
`;

export const CarrosselWrapper = styled.div`
  display: flex;
  width: 55%; 
  /* REMOVIDO: transform: translateX(${props => props.translateX}px); */
  
  /* AJUSTE AQUI: Diminuindo o gap entre as imagens */
  gap: 20px; /* Novo gap padrão para desktop */
  border-radius: 25px;

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 15px; /* Novo gap em tablets */
  }
  @media (max-width: 500px){
    gap: 10px; /* Novo gap em celulares */
  }
`;

export const Slide = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1% 0;
  flex-shrink: 0; 
  flex-grow: 0; 

  /* AJUSTE AQUI: Atualizando flex-basis para o novo gap e número de itens visíveis */
  /* O número de slides visíveis permanece o mesmo que a lógica anterior (5, 3, 2) */
  /* Mas agora a largura do gap dentro do calc() é menor */
  
  /* Desktop (5 slides visíveis) */
  flex-basis: calc((100% / 5) - (20px * 4 / 5)); 
  min-width: calc((100% / 5) - (20px * 4 / 5)); 
  transition: 250ms all ease-in-out;

  &:hover {
    scale: 1.1;
  }

  p {
    font-family: 'Anta';
    font-size: 1.5em; 
    color: wheat;
    font-weight: bold;
    text-align: center;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    /* Tablet (3 slides visíveis) */
    flex-basis: calc((100% / 3) - (15px * 2 / 3)); 
    min-width: calc((100% / 3) - (15px * 2 / 3));
    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 500px){
    /* Mobile (2 slides visíveis) */
    flex-basis: calc((100% / 2) - (10px * 1 / 2)); 
    min-width: calc((100% / 2) - (10px * 1 / 2));
    p {
      font-size: 1em;
    }
  }
`;

export const TecnologiaImagem = styled.img`
  /* AJUSTE AQUI: Aumentando o tamanho das imagens */
  height: 100px; /* Tamanho padrão para desktop */
  width: 100px; /* Tamanho padrão para desktop */
  object-fit: contain; 
  flex-shrink: 0; 
  margin-bottom: 10px; /* Espaço entre a imagem e o texto */

  @media (max-width: 768px) {
    height: 80px; /* Tamanho em tablets */
    width: 80px; /* Tamanho em tablets */
  }
  @media (max-width: 500px){
    height: 70px; /* Tamanho em celulares */
    width: 70px; /* Tamanho em celulares */
  }
`;