import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: rgba(144, 4, 204, 0.50); 
  backdrop-filter: blur(5px); 
  height: 8vh; 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: #01FFFE 0px 0px 50px -10px,
    #01FFFE 0px 10px 30px -5px inset;

  // Media Query para telas menores que 1000px
  @media (max-width: 1000px) {
    height: 8vh; 
    justify-content: space-around; 
    padding: 0 15px;
  }

  // Media Query para telas menores que 650px
  @media (max-width: 650px) {
    height: 7vh;
    flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não couberem */
    justify-content: center; 
    gap: 10px; 
    padding: 10px;
  }

  // Media Query para telas menores que 480px (smartphones)
  @media (max-width: 480px) {
    height: auto; /* Altura automática para se adaptar ao conteúdo */
    min-height: 6vh; 
    flex-direction: column; /* Coloca os parágrafos um abaixo do outro */
    justify-content: center;
    gap: 5px;
    padding: 15px 10px;
  }
`;

export const Paragrafo = styled.p`
  font-family: 'Orbitron', sans-serif; 
  color: aliceblue;
  font-size: 22px; 
  font-weight: 500;
  text-align: center; /* Garante que o texto seja centralizado em telas menores */
  white-space: nowrap; /* Evita que o texto quebre em várias linhas por padrão */

  span {
    color: #01FFFE ;
     font-family: 'Orbitron', sans-serif;
     transition: 300ms all ease-in-out;

     &:hover {
      color: yellow;
     }
  }


  @media (max-width: 1000px) {
    font-size: 18px;
    white-space: normal; /* Permite que o texto quebre em várias linhas */
  }

  
  @media (max-width: 650px) {
    font-size: 16px; 
    margin: 0 5px; /* Adiciona uma pequena margem horizontal se flex-wrap estiver ativo */
  }

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 1.3;
  }
`;