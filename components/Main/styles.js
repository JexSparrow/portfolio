import styled, { keyframes } from "styled-components";

// Keyframes para o conteúdo vindo da esquerda
export const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Keyframes para a imagem vindo da direita
export const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%; /* Usar 100% aqui é ok se o pai for 100vh ou 100% de um elemento de altura definida */
  z-index: -2;
  object-fit: cover;
  pointer-events: none;
  filter: brightness(0.75);
`;

export const Conteiner = styled.div`
  
  position: relative;
  /* Mudar para min-height: 100vh para garantir que ele tenha pelo menos a altura da tela,
     mas possa crescer se o conteúdo exigir. */
 
  width: 100%;
  /* Remover overflow: hidden aqui se você quer que o conteúdo role dentro do Conteiner */
  /* overflow: hidden; // Comentar ou remover se o conteúdo for rolável */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #01FFFE 0px -30px 60px -30px;

  
`;

export const Simbolo = styled.span`
  color: #ff01b7;
`;

export const DivTop = styled.div`
  background-color: rgba(45, 8, 76, 0.75);
  /* Remover position: absolute e height: 100% para que DivTop entre no fluxo normal do Conteiner */
  /* top: 0; left: 0; */
  width: 100%;
  /* height: 100%; Removido para que a altura seja baseada no conteúdo */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row; /* Padrão para desktop */
  gap: 5%;
  padding: 4% 2.5%; /* Mantém o padding horizontal */
  box-shadow: rgb(0, 0, 0) 0px -50px 20px -28px inset;
 
  


  /* Media Query para telas menores (usando um breakpoint mais adequado) */
  @media (max-width: 1000px) { /* Este breakpoint parece ser onde você quer a transição */
    flex-direction: column; /* Quebra para coluna */
    padding: 20px 2.5%; /* Ajusta padding para telas menores */
    justify-content: center; /* Centraliza verticalmente */
    /* Garante que o DivTop se ajuste e permita rolagem se o conteúdo for muito grande */
    min-height: auto; /* Deixa a altura ser determinada pelo conteúdo */
    /* Remove a necessidade de height:100% que pode cortar conteúdo */
  }

  > div { /* Estiliza o div interno que contém título e parágrafo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Alinha o texto à esquerda por padrão */
    text-align: left;
    z-index: 1;
    pointer-events: auto;
    /* Flex-basis para controlar a largura do bloco de texto */
   
    
    margin: 20px 0; /* Adiciona margem para separar do topo/base do DivTop */


    @media (max-width: 1200px) { /* Aplica quando DivTop vira coluna */
      align-items: center; /* Centraliza o texto quando em coluna */
      text-align: center;
      flex-basis: 100%; /* Ocupa a largura total */
      max-width: 100%; /* Sem limite de largura em telas pequenas */
      margin-bottom: 20px; /* Margem inferior para separar do próximo item (imagem) */
    }
    @media (max-width: 768px) { /* Ajustes para telas menores */
      margin: 10px 0; /* Reduz margem vertical */
    }
  }

  p {
    font-family: 'Anta';
    font-size: 22px;
    color: aliceblue;
    margin: 10px 0;
    animation: ${slideInLeft} 1.2s ease-out forwards;
    animation-delay: 500ms;
    transform: translateX(-100%);
    opacity: 0;

    @media (max-width: 1200px) { /* Ajustes para telas médias/pequenas */
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h1 {
    font-family: 'Orbitron';
    text-shadow: 3px 1px 5px rgba(0, 183, 174, 0.81);
    letter-spacing: 10px;
    font-size: 72px;
    color: aliceblue;
    font-weight: 800;
    margin-bottom: 20px;
    animation: ${slideInLeft} 1.2s ease-out forwards;
    animation-delay: 300ms;
    transform: translateX(-100%);
    opacity: 0;

    @media (max-width: 1326px) {
      font-size: 3.5rem; /* Ajuste o tamanho da fonte para telas menores */
      letter-spacing: 7px;
    }
    @media (max-width: 768px) {
      font-size: 2.5rem;
      letter-spacing: 5px;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
      letter-spacing: 3px;
    }
  }

  span { /* Este span é o Simbolo dentro do h1, ou talvez um span genérico */
    font-family: 'Orbitron';
    font-size: 52px;
    letter-spacing: 0px;
    transition: 200ms all ease-in-out;

    &:hover {
      color: aliceblue;
    }

    @media (max-width: 1326px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  img { /* Estiliza a Imagem diretamente aqui para simplificar */
    height: 450px;
    border-radius: 50%;
    z-index: 1;
    pointer-events: auto;
    box-shadow: rgba(0, 150, 158, 0.56) 0px 22px 70px 4px;
    transition: 250ms box-shadow ease-in-out, 250ms scale ease-in-out;
    transform: translateX(100%);
    opacity: 0;

    &:hover {
      box-shadow: rgba(251, 255, 0, 0.83) 0px 0px 300px 4px;
      scale: 0.98;
    }

    animation: ${slideInRight} 1.2s ease-out forwards;
    animation-delay: 300ms;

    /* Media Queries para a imagem */
    @media (max-width: 1326px) { /* Ajusta altura da imagem quando DivTop vira coluna */
      height: 300px;
      margin-top: 20px; /* Adiciona margem superior para separar do texto */
    }
    @media (max-width: 768px) {
      height: 200px;
      margin-top: 15px;
    }
    @media (max-width: 500px) {
      height: 150px;
      margin-top: 10px;
    }
  }
`;

export const DivParagrafo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 26px;
    color: #01FFFE;
    font-family: 'Anta';
    transition: 200ms all ease-in-out;

    &:hover {
      color: aliceblue;
    }

    @media (max-width: 1326px) {
      font-size: 1.3rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  > div {
    span:nth-of-type(2):hover,
    span:nth-of-type(1):hover {
      color: yellow;
    }
  }
`;