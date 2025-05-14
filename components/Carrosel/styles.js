import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: black;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10%;


  h1 {
    font-family: 'Orbitron';
    letter-spacing: 5px;
    font-size: 50px;
    color: aliceblue;

  }
`;

export const CarrosselContainer = styled.div`
  width: 90%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  height: 100%;
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
  min-width: auto;
  gap: 5%;
 
  p {
    font-family: 'Anta';
     font-size: 1.5em; /* Reduzi um pouco a fonte do texto para dar espaço à imagem */
  color: wheat;
  font-weight: bold;
  }
  
`;

export const TecnologiaImagem = styled.img`
  height: 100%;
  min-width: 100%;
  margin-bottom: 10px; /* Espaço entre a imagem e o texto */
`;