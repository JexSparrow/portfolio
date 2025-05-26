import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: rgba(144, 4, 204, 0.50); /* Escolha suas cores e direção */
  backdrop-filter: blur(5px); /* Ajuste o valor do blur conforme desejado */
  height: 8vh; /* Altura padrão para desktop */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: #01FFFE 0px 0px 50px -10px,
    #01FFFE 0px 10px 30px -5px inset;

  // Media Query para telas menores que 1000px
  @media (max-width: 1000px) {
    height: 8vh; /* Pode aumentar um pouco a altura para acomodar texto menor */
    justify-content: space-around; /* Ajusta o espaçamento */
    padding: 0 15px; /* Adiciona um padding lateral */
  }

  // Media Query para telas menores que 650px
  @media (max-width: 650px) {
    height: 7vh;
    flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha se não couberem */
    justify-content: center; /* Centraliza os itens quando quebrarem */
    gap: 10px; /* Adiciona um pequeno espaçamento entre os itens */
    padding: 10px; /* Mais padding para cima/baixo */
  }

  // Media Query para telas menores que 480px (smartphones)
  @media (max-width: 480px) {
    height: auto; /* Altura automática para se adaptar ao conteúdo */
    min-height: 6vh; /* Garante uma altura mínima */
    flex-direction: column; /* Coloca os parágrafos um abaixo do outro */
    justify-content: center;
    gap: 5px; /* Reduz o espaçamento entre os parágrafos */
    padding: 15px 10px; /* Mais padding para melhor visualização */
  }
`;

export const Paragrafo = styled.p`
  font-family: 'Orbitron', sans-serif; /* Correção: Nome da fonte principal entre aspas */
  color: aliceblue;
  font-size: 22px; /* Tamanho da fonte padrão para desktop */
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

 

  // Media Query para telas menores que 1000px
  @media (max-width: 1000px) {
    font-size: 18px; /* Diminui a fonte */
    white-space: normal; /* Permite que o texto quebre em várias linhas */
  }

  // Media Query para telas menores que 650px
  @media (max-width: 650px) {
    font-size: 16px; /* Diminui mais a fonte */
    margin: 0 5px; /* Adiciona uma pequena margem horizontal se flex-wrap estiver ativo */
  }

  // Media Query para telas menores que 480px
  @media (max-width: 480px) {
    font-size: 9px; /* Tamanho ideal para smartphones */
    line-height: 1.3; /* Melhora a legibilidade em várias linhas */
  }
`;