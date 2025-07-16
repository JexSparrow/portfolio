import styled, { keyframes, css } from "styled-components";

const fadeInUpAndScale = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.5); /* Começa 50px abaixo e com 50% do tamanho */
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1); /* Termina na posição original e com 100% do tamanho */
  }
`;



export const BackgroundVideo = styled.video`
  position: absolute; /* Fixo na viewport */
  right: 0;
  bottom: -50px;
  width: 100%; /* Garante que cubra toda a largura */
  height: 107%; /* Garante que cubra toda a altura com uma margem extra */
  z-index: -2;
  object-fit: cover; /* Cobre a área, cortando se necessário, sem distorcer */
  pointer-events: none; /* Para garantir que não haja interações indesejadas com o vídeo em si */
  filter: brightness(0.99); /* Ajuste o brilho conforme desejado */

  @media (max-width: 650px) {
    height: 100%; /* Em telas menores, pode ser melhor 100% para evitar scroll indesejado */
    bottom: 0; /* Remove o offset se a altura for 100% */
  }
`;

export const Conteiner = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
  height: 100%; 
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  box-shadow: -1px -13px 22px 15px rgba(0, 0, 0, 0.95),
              1px 7px 18px 11px rgba(0, 0, 0, 0.95) inset;

  // Responsividade para o Conteiner
  @media (max-width: 1000px) {
    padding: 20px 0;
    gap: 20px;
  }

  @media (max-width: 650px) {
    padding: 30px 0;
    gap: 30px;
  }

  @media (max-width: 500px) {
    padding: 50px 20px;
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-family: 'Orbitron';
  letter-spacing: 3px;
  font-size: 52px;
  color: aliceblue;
  text-shadow: 2px 2px 1px #ff005e, 3px 3px 1px #00d4ff;
  transition: 200ms all ease-in-out;
  opacity: 0;
  transform: translateY(50px) scale(0.5); /* Estado inicial antes da animação */

  &:hover {
    scale: 0.95;
  }

  ${props => props.$isVisible && css`
    animation: ${fadeInUpAndScale} 1.5s ease-out forwards;
    animation-delay: 100ms;
  `}

  // Media Queries para responsividade
  @media (max-width: 1000px) {
    font-size: 42px;
    letter-spacing: 2px;
    text-shadow: 1.5px 1.5px 0.5px #ff005e, 2.5px 2.5px 0.5px #00d4ff;
    transform: translateY(40px) scale(0.6); 

    &:hover {
      scale: 0.9;
    }
  }

  @media (max-width: 650px) {
    font-size: 34px;
    padding-bottom: 6px;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 0.5px #ff005e, 2px 2px 0.5px #00d4ff;
    transform: translateY(30px) scale(0.7); 

    &:hover {
      scale: 0.85;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 8px;
    font-size: 24px;
    letter-spacing: 1px;
    text-shadow: 0.8px 0.8px 0.3px #ff005e, 1.5px 1.5px 0.3px #00d4ff;
    transform: translateY(20px) scale(0.8); 

    &:hover {
      scale: 0.8;
    }
  }
`;

export const FormBox = styled.div`
  background-color: rgba(144, 4, 204, 0.41);
  backdrop-filter: blur(2.5px);
  height: 100%; 
  min-width: 35%; /* Largura mínima em desktop */
  max-width: 80%; /* Largura máxima para evitar que ocupe demais */
  border-radius: 25px;
  transition: 300ms all ease-in-out;
  box-shadow: rgba(1, 255, 254, 0.5) 0px 0px 50px -5px;
  opacity: 0;
  transform: translateY(50px) scale(0.5);

  &:hover {
    scale: 0.95;
    box-shadow: rgba(0, 51, 255, 0.65) 0px 0px 50px -5px;
  }

  ${props => props.$isVisible && css`
    animation: ${fadeInUpAndScale} 1.5s ease-out forwards;
    animation-delay: 300ms;
  `}

  div { /* Estilos para o div dentro de FormBox */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  // Responsividade para o FormBox
  @media (max-width: 1000px) {
    min-width: 50%; /* Aumenta a largura em tablets */
    max-width: 90%;
  }

  @media (max-width: 650px) {
    min-width: 70%; /* Aumenta ainda mais */
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    min-width: 90%; /* Ocupa quase toda a largura em smartphones */
    max-width: 100%;
    border-radius: 10px; /* Bordas um pouco menos arredondadas */
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  gap: 20px;

  // Responsividade para o Formulario
  @media (max-width: 650px) {
    padding: 15px 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    gap: 15px;
  }
`;

export const Label = styled.label`
  font-family: 'Anta';
  font-size: 28px;
  color: rgba(1, 255, 255, 0.75);
  transition: 500ms all ease-in-out;

  &:hover {
    color: yellow;
  }

  // Responsividade para o Label
  @media (max-width: 1000px) {
    font-size: 24px;
  }

  @media (max-width: 650px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  font-family: 'Anta';
  padding: 0 2.5%; /* Padding lateral */
  font-size: 1.5em;
  height: 2em; /* Altura baseada na fonte */
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.25);
  color: #fff;
  transition: 300ms all ease-in-out;

  &:hover {
    background-color: rgba(164, 146, 146, 0.35);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.20);
    box-shadow: #01FFFE 0px 0px 40px -20px inset;
  }

  // Responsividade para o Input
  @media (max-width: 1000px) {
    font-size: 1.3em;
    height: 2.2em;
  }

  @media (max-width: 650px) {
    font-size: 1.1em;
    height: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    height: 2.8em;
    padding: 0 4%;
  }
`;

export const TextArea = styled.textarea`
  font-family: 'Oxanium';
  font-weight: 500;
  font-size: 1.5em;
  height: 6em;
  padding: 2%; 
  border: none;
  border-radius: 10px;
  resize: none; /* Desativa o redimensionamento pelo usuário */
  overflow: auto; /* Garante scroll se o conteúdo exceder */
  outline: none;
  background-color: rgba(255, 255, 255, 0.25);
  color: #fff;
  transition: 300ms all ease-in-out;

  &:hover {
    background-color: rgba(164, 146, 146, 0.35);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.20);
    box-shadow: rgba(1, 255, 255, 0.75) 0px 0px 60px -20px inset;
  }

  /* Estilização para barras de rolagem em WebKit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: yellow; /* Cor do "polegar" */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 189, 218, 0.67); /* Cor de fundo da trilha */
    border-radius: 4px;
  }

  // Responsividade para o TextArea
  @media (max-width: 1000px) {
    font-size: 1.3em;
    height: 7em; 
    padding: 3%;
  }

  @media (max-width: 650px) {
    font-size: 1.1em;
    height: 8em;
    padding: 4%;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    height: 9em;
    padding: 5%;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  margin: 0 auto;
  line-height: 1em;
  max-width: 50%; 
  min-width: 40%; 
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: 300ms all ease-in-out;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
  }

  span {
    background-color: rgb(5, 6, 45);
    font-family: 'Orbitron';
    font-size: 26px;
    letter-spacing: 2px;
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: background-color 300ms ease-in-out;
  }

  &:hover span {
    background: none;
  }

  // Responsividade para o Button
  @media (max-width: 1000px) {
    max-width: 60%;
    min-width: 45%;
    span {
      font-size: 22px;
      padding: 14px 20px;
    }
  }

  @media (max-width: 650px) {
    max-width: 70%;
    min-width: 50%;
    span {
      font-size: 18px;
      padding: 12px 18px;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 480px) {
    max-width: 85%;
    min-width: 60%;
    span {
      font-size: 16px;
      padding: 10px 15px;
      letter-spacing: 0.5px;
    }
  }
`;

export const Whatsapp = styled.a`
  img {
    position: absolute;
    right: 1%;
    bottom: 3%;
    z-index: 999;
    height: 55px;
    transition: 200ms all ease-in;
    cursor: pointer;

    &:hover {
      scale: 1.1;
      transform: translateY(-10px);
    }
  }

  // Responsividade para o Whatsapp
  @media (max-width: 1000px) {
    img {
      height: 48px;
    }
  }

  @media (max-width: 650px) {
    img {
      height: 40px;
      right: 2%;
      bottom: 2.5%;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 35px;
      right: 3%;
      bottom: 2%;
    }
  }
`;

export const Arrow = styled.a`
  position: absolute;
  left: 1%;
  bottom: 1%;
  z-index: 999;
  transition: 200ms all ease-in;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transform: translateY(-10px);
  }

  img {
    height: 55px;
  }
  @media (max-width: 1000px) {
    img {
      height: 48px;
    }
  }

  @media (max-width: 650px) {
    img {
      height: 40px;
      left: 2%;
      bottom: 2%;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 35px;
      left: 3%;
      bottom: 1.5%;
    }
  }
`;