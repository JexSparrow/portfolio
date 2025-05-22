import styled, { keyframes, css } from "styled-components";

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

// ==============================================================================
// NOVOS COMPONENTES E ESTILOS PARA O MENU LATERAL
// ==============================================================================

// Ícone Hamburger
export const HamburgerIcon = styled.div`
  display: none; /* Padrão: escondido em telas grandes */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1000; /* Garante que fique acima de tudo, incluindo Sidebar e Overlay */

  /* Posição fixa para estar sempre visível no canto superior direito */
  position: fixed;
  top: 25px; /* Ajuste a distância do topo */
  right: 20px; /* Ajuste a distância da direita */
  
  div {
    width: 100%;
    height: 3px;
    background-color: aliceblue; /* Cor padrão */
    border-radius: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }

  /* Visível apenas em telas menores que 650px */
  @media (max-width: 650px) {
    display: flex; /* Mostra o ícone */
  }
  /* Ajuste de posição para telas ainda menores */
  @media (max-width: 480px) {
    top: 20px;
    right: 15px;
    width: 25px; /* Pode reduzir um pouco o tamanho do ícone */
    height: 20px;
  }

  /* Animação para virar um 'X' e MUDAR A COR para vermelho quando aberto */
  ${props => props.isOpen && css`
    div {
      background-color: red; /* Cor vermelha quando o menu está aberto */
    }
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

// Overlay (escurece o fundo quando a sidebar está aberta)
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 998; /* Abaixo da sidebar, acima do resto */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* Permite cliques através por padrão */

  ${props => props.isOpen && css`
    opacity: 1;
    pointer-events: auto; /* Bloqueia cliques quando aberto */
  `}
`;

// Sidebar (o menu lateral)
export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 50vh; /* Mantido conforme sua alteração */
  width: 200px; /* Mantido conforme sua alteração */
  background-color: rgba(45, 8, 76, 0.6); /* Mantido conforme sua alteração */
  backdrop-filter: blur(10px); /* Mantido conforme sua alteração */
  z-index: 999; /* Acima do overlay, abaixo do HamburgerIcon */
  display: flex;
  flex-direction: column;
  padding-top: 80px; /* Espaço para o topo (onde o header ficaria por baixo) */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);

  ${props => props.isOpen && css`
    transform: translateX(0);
  `}

  @media (min-width: 651px) {
    display: none;
  }

  @media (max-width: 320px) {
    width: 80vw;
  }
`;

// Estilo dos links dentro da sidebar
export const LinkSidebar = styled.a`
  font-family: 'Orbitron', sans-serif;
  color: aliceblue;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(144, 4, 204, 0.6);
    color: #fff;
  }

  &:active {
    color: #ff01b7;
  }

  img {
    display: none; /* Mantido conforme sua alteração - esconde img dentro do link da sidebar */
  }
`;

// ==============================================================================
// AJUSTES NOS SEUS COMPONENTES EXISTENTES
// ==============================================================================

// Seu Conteiner (Header) existente
export const Conteiner = styled.div`
  background-color: rgba(144, 4, 204, 0.41);
  backdrop-filter: blur(5px);
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: #01FFFE 0px 0px 50px -10px;
  padding: 0 20px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 80px;
    justify-content: space-around;
    padding: 15px 10px;
  }

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: row;
    gap: 0;
  }

  @media (max-width: 650px) {
    /* AGORA: Centralizar a LogoWrapper (jslogo) quando o hamburger é fixo */
    justify-content: center; /* Centraliza horizontalmente a LogoWrapper */
    align-items: center; /* Centraliza verticalmente a LogoWrapper */
    padding: 10px 20px; /* Mantém padding para evitar que o LogoWrapper cole nas bordas */
    min-height: 70px;
  }

  @media (max-width: 480px) {
    min-height: 60px;
    padding: 8px 15px;
  }
`;

// Seu LogoWrapper existente
export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20%;

  @media (max-width: 800px) {
    margin-right: 0%;
  }

  img {
    height: 45px;

    @media (max-width: 1024px) {
      height: 35px;
    }
    @media (max-width: 800px) {
      height: 30px;
    }
    @media (max-width: 650px) {
      height: 40px;
    }
    @media (max-width: 480px) {
      height: 35px;
    }
  }

  p {
    color: aliceblue;
    font-family: 'Orbitron';
    font-size: 10px;
    font-weight: bolder;
    margin-top: 5px;
    white-space: nowrap;

    @media (max-width: 1024px) {
      font-size: 8px;
    }
    @media (max-width: 800px) {
      font-size: 7px;
    }
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

// Seu Link existente (Links para Desktop)
export const Link = styled.a`
  font-family: 'Orbitron', sans-serif;
  color: aliceblue;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms all ease-in;
  padding: 5px 10px;

  &:hover {
    font-weight: bold;
    color: #fff;
    scale: 1.15;
  }

  &:active {
    color: #ff01b7;
    scale: 1.25;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 3px 8px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
    padding: 2px 5px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

// Seu componente Download
export const Download = styled.img`
  height: 25px;
  cursor: pointer;
  filter: brightness(0.8);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

// Ajuste para o contêiner do Download CV no desktop
// .desktop-download-cv {
//   display: flex;
//   @media (max-width: 650px) {
//     display: none !important;
//   }
// }