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
  bottom:-50px;
  /* Garante que cubra toda a altura */
  width: 100%; /* Mantém a proporção */
  height: 107%; /* Mantém a proporção */
  z-index: -2; /* Bem no fundo */
  object-fit: cover; /* Cobre a área, cortando se necessário, sem distorcer */
  /* Para garantir que não haja interações indesejadas com o vídeo em si */
  pointer-events: none;
  /* filter: blur(1px) */
  filter: brightness(0.99)
  
`;

export const Conteiner = styled.div`
position: relative;
background-color: rgba(0,0,0, 0.85);
height: 100%;
display: flex;
gap: 25px;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 30px 0;
box-shadow: -1px -13px 22px 15px rgba(0, 0, 0, 0.95),
            1px 7px 18px 11px rgba(0, 0, 0, 0.95) inset;

`;

export const Title = styled.h2`
font-family: 'Orbitron';
letter-spacing: 3px;
font-size: 52px;
color: aliceblue;
text-shadow: 2px 2px 1px #ff005e, 3px 3px 1px #00d4ff;
transition: 200ms all ease-in-out;
opacity: 0;
    transform: translateY(50px) scale(0.5);

    &:hover {
      scale: 0.95;
      
    }

     ${props => props.$isVisible && css`
          animation: ${fadeInUpAndScale} 1.5s ease-out forwards;
          animation-delay: 100ms;
        `}

`

export const FormBox = styled.div`
background-color: rgba(144, 4, 204, 0.41);/* Escolha suas cores e direção */
backdrop-filter: blur(2.5px); /* Ajuste o valor do blur conforme desejado */
height: 100%;
min-width: 35%;
max-width: 80%;
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


div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    
}

`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
padding: 20px 30px;
gap: 20px;


`;

export const Label = styled.label`
font-family: 'Anta';
font-size: 28px;
color:rgba(1, 255, 255, 0.75);
transition: 500ms all ease-in-out;

&:hover {
  color: yellow;
}

`;

export const Input = styled.input`
font-family: 'Anta';
padding: 0 2.5%;
font-size: 1.5em;
height: 2em;
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




`;

export const TextArea = styled.textarea`

font-family: 'Oxanium';
font-weight: 500;
font-size: 1.5em;
height: 6em;
padding: 2%;
border: none;
border-radius: 10px;
resize: none;
overflow: auto;
outline: none;
background-color: rgba(255, 255, 255, 0.25);
color: #fff;
transition: 300ms all ease-in-out;

&:hover {
  background-color: rgba(164, 146, 146, 0.35);

}

&:focus {
  background-color: rgba(255, 255, 255, 0.20);
  box-shadow:rgba(1, 255, 255, 0.75) 0px 0px 60px -20px inset;
  

}

/* Estilização para navegadores WebKit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: yellow; /* Cor azul para o "polegar" */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color:rgb(94, 218, 0); /* Cor de fundo da trilha (opcional) */
    border-radius: 4px;
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
  transition: 300ms all ease-in-out; /* Adicionando transição suave para o hover */

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
    transition: background-color 300ms ease-in-out; /* Transição suave para o background no hover */
  }

  &:hover span {
    background: none;
  }
`;

export const Whatsapp = styled.a`

img {
position: absolute;
right: 1%;
bottom: 3% ;
z-index: 999;
height: 55px;
transition: 200ms all ease-in;
cursor: pointer;

&:hover {
  scale: 1.1;
  transform: translateY(-10px);
  
}

}

`;

export const Arrow = styled.a`
position: absolute;
left: 1%;
bottom: 1% ;
z-index: 999;
transition: 200ms all ease-in;
cursor: pointer;

&:hover {
  scale: 1.1;
  transform: translateY(-10px);
  
  
}
`;

