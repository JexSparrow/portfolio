import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: rgba(144, 4, 204, 0.41);/* Escolha suas cores e direção */
  backdrop-filter: blur(5px); /* Ajuste o valor do blur conforme desejado */
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: #01FFFE 0px 0px 50px -10px;
                       

  img {
    margin-right: 25%;
    height: 75px;
    transition: 500ms all ease-in-out;
    cursor: pointer ;

    &:hover {
        transform: rotateY(180deg);
    }
  }
`;

export const Link = styled.a`
  font-family: 'Orbitron', sans-serif; /* Correção: Nome da fonte principal entre aspas */
  color: aliceblue;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
   text-decoration: none;
  transition: 200ms all ease-in;

  &:hover {
    font-weight: bold;
    color: #fff;
    scale: 1.15;

  }

  &:active {
    color: #ff01b7;
    scale: 1.25;
  }
`;