import styled, { keyframes } from 'styled-components';

export const BackgroundVideo = styled.video`
position: absolute; /* Fixo na viewport */
  right: 0;
  bottom:0;
  /* Garante que cubra toda a altura */
  width: 100%; /* Mantém a proporção */
  height: 100%; /* Mantém a proporção */
  z-index: -2; /* Bem no fundo */
  object-fit: cover; /* Cobre a área, cortando se necessário, sem distorcer */
  /* Para garantir que não haja interações indesejadas com o vídeo em si */
  pointer-events: none;
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



export const Conteiner = styled.div`
position: relative;
  background-color: rgba(0, 0, 0, 0.85);
  min-height: 100vh;
  display: grid;
  place-items: center;
  box-shadow: rgba(0, 0, 2, 0.95) 0px 50px 20px -15px inset, rgba(0, 0, 0, 0.95) 0px 50px 36px -50px inset;
`;

export const Title = styled.h1`
    font-family: 'Orbitron';
    letter-spacing: 5px;
    font-size: 5rem;
    color: #fff;
    text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
    animation: shadow-dance 2s infinite;


@keyframes shadow-dance {
    0%, 100% {
        text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
    }
    50% {
        text-shadow: -5px -5px 0 #00d4ff, -10px -10px 0 #ff005e;
    }
}
`;

export const Slider = styled.div`
  width: 90%;
  height:45vh;
  margin: auto;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;

  &::before,
   &::after{

    background: linear-gradient(to right, rgb(4, 4, 4) 0%,
     rgba(255,255,255,0)100%);
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

  &::after{

    right: -1px;
    top: 0;
    transform: rotateZ(180deg);

  }
`;


export const SliderTrack = styled.div`
  display: flex;
    width: calc(300px * 24);
  animation: ${scroll} 20s linear infinite;

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
    width: 75%;
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
  background-color: rgba(0, 0, 0, 0.8); /* Fundo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Garante que fique acima do carrossel */

`;

export const ConteinerVideoInfos = styled.div`
  width: 95%;
  height: 88vh;
  border-radius: 25px;
  background-color: rgba(144, 4, 204, 0.38);/* Escolha suas cores e direção */
  backdrop-filter: blur(5px); /* Ajuste o valor do blur conforme desejado */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  padding: 1%;
  box-shadow: #01FFFE 0px 0px 70px -20px inset,
            0px 0px 20px 0px #01FFFE;

  h3 {
    font-family: 'Tektur';
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  iframe {
    border: none;
    box-shadow:rgba(0, 255, 238, 0.51) 0px 0px 100px -20px;
    
  }

`;

export const ProjetoDetalhes = styled.div`

  
  height: 100%;
  max-width: 50%;
  color: wheat;
  position: relative; /* Para posicionar elementos internos, se necessário */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 4%;  

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
 
`;

export const ProjetoDescricao = styled.p`
line-height: 95%;
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
    color: #01FFFE ;
  }

  &:active {
    scale: 0.90;
  }
`;
