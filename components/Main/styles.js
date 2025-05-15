import styled from "styled-components";

export const BackgroundVideo = styled.video`
  position: absolute; /* Fixo na viewport */
  right: 0;
  bottom: 0;
  /* Garante que cubra toda a altura */
  width: 100%; /* Mantém a proporção */
  height: auto; /* Mantém a proporção */
  z-index: -2; /* Bem no fundo */
  object-fit: contain; /* Cobre a área, cortando se necessário, sem distorcer */
  /* Para garantir que não haja interações indesejadas com o vídeo em si */
  pointer-events: none;
  filter: brightness(0.75);
`;

export const Conteiner = styled.div`
  position: relative; /* Adicionamos para criar um contexto de posicionamento para os filhos */
  height: 100vh; /* Preenche toda a altura da tela */
  width: 100%; /* Preenche toda a largura da tela */
  overflow: hidden; /* Garante que o vídeo não cause barras de rolagem */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #01FFFE 0px -30px 60px -30px;

`;

export const Simbolo = styled.span`
color:#ff01b7;
`;

export const DivTop = styled.div`
    background-color: rgba(45, 8, 76, 0.75);
  position: absolute; /* Posiciona a DivTop sobre o vídeo */
  top: 0;
  left: 0;
  width: 100%; /* Garante que a DivTop ocupe toda a largura */
  height: 100%; /* Garante que a DivTop ocupe toda a altura para centralizar corretamente */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; /* Alinha os itens verticalmente para centralizar o conteúdo */
  gap: 10%;
  padding: 0 2.5%;
  box-shadow: rgb(0, 0, 0) 0px -50px 20px -28px inset;
 

  > div { /* Estiliza o div interno que contém título e parágrafo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left; /* Centraliza o texto horizontalmente */
    text-align: left; /* Centraliza o texto dentro dos elementos */
    z-index: 1; /* Garante que o texto fique acima do vídeo */
    pointer-events: auto; /* Permite interações com o texto */
  }

  p {
    font-family: 'Anta';
    font-size: 22px;
    color: aliceblue;
    margin: 10px 0; /* Adiciona um pouco de margem vertical */
  }

  h1 {

    font-family: 'Orbitron';
    text-shadow: 3px 1px 5px rgba(0, 183, 174, 0.81);

    letter-spacing: 10px;
    font-size: 72px;
    color: aliceblue;
    font-weight: 800;
    margin-bottom: 20px; /* Adiciona um pouco de margem abaixo do título */
  }

  span {
    font-family: 'Orbitron';
    font-size: 52px;
    letter-spacing: 0px;
    transition: 200ms all ease-in-out;

    &:hover {
      color: aliceblue;
     
   
    }
  }

  

  img { /* Estiliza a Imagem diretamente aqui para simplificar */
    height: 450px;
    border-radius: 50%;
    
    z-index: 1; /* Garante que a imagem fique acima do vídeo */
    pointer-events: auto; /* Permite interações com a imagem (se houver) */
   box-shadow: rgba(0, 150, 158, 0.56) 0px 22px 70px 4px;
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
  }

  > div {

    span:nth-of-type(2):hover,
    span:nth-of-type(1):hover {

    color: yellow;
  }

  } 
`;



