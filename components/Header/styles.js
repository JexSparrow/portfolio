import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: rgba(144, 4, 204, 0.41);
  backdrop-filter: blur(5px);
  height: 10vh; /* 10% da altura da viewport - pode ser ajustado com min-height em mobile */
  display: flex;
  justify-content: space-evenly; /* Distribui o espaço entre os itens */
  align-items: center;
  box-shadow: #01FFFE 0px 0px 50px -10px;
  padding: 0 20px; /* Adiciona padding lateral para não colar nas bordas */
  flex-wrap: wrap; /* Permite que os itens quebrem linha se não houver espaço suficiente */

  /* Media Query para telas menores que 1024px (laptops/tablets) */
  @media (max-width: 1024px) {
    height: auto; /* A altura se ajusta ao conteúdo */
    min-height: 80px; /* Garante uma altura mínima */
    justify-content: space-around; /* Ajusta a distribuição em telas médias */
    padding: 15px 10px; /* Reduz padding */
  }

  /* Media Query para telas menores que 768px (tablets em modo retrato, celulares grandes) */
@media (max-width: 650px){
  justify-content: center;
}

  /* Media Query para telas menores que 480px (celulares) */
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 10px 5px;
  }
`;

export const LogoWrapper = styled.div` /* Renomeado de 'div' para clareza */
  position: relative; /* FUNDAMENTAL para posicionar 'p' relativo a este div */
  display: flex; /* Usar flexbox para posicionar img e p */
  flex-direction: column; /* Empilha img e p */
  align-items: center; /* Centraliza horizontalmente img e p */
  justify-content: center; /* Centraliza verticalmente img e p */
  margin-right: 20%;
  
  /* Ajustes responsivos para o wrapper do logo */
  @media (max-width: 800px) {
    margin-bottom: 5px; /* Adiciona um pequeno espaço abaixo do logo em telas menores */
    margin-right: 0%;
  }

  img {
    height: 45px; /* Altura padrão para desktop */
    /* transição etc. */

    /* Reduz o tamanho do logo em telas menores */
    @media (max-width: 1024px) {
      height: 35px;
    }
    @media (max-width: 800px) {
      height: 30px;
    }

    @media (max-width: 650px) {
      height: 40px;
      margin-bottom: 0px;
      
    }
  }

  p {
    color: aliceblue;
    font-family: 'Orbitron';
    font-size: 10px; /* Tamanho padrão */
    font-weight: bolder;
    /* Removido position: absolute, top, left, width, height e z-index
       Agora ele se posiciona naturalmente abaixo da imagem devido ao flex-direction: column */
    margin-top: 5px; /* Pequena margem para separar da imagem */
    white-space: nowrap; /* Evita que o texto quebre em várias linhas se for curto */

    /* Reduz o tamanho da fonte em telas menores */
    @media (max-width: 1024px) {
      font-size: 8px;
    }
    @media (max-width: 800px) {
      font-size: 7px;
    }
  }
`;

export const Link = styled.a`
  font-family: 'Orbitron', sans-serif;
  color: aliceblue;
  font-size: 22px; /* Tamanho padrão para desktop */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms all ease-in;
  padding: 5px 10px; /* Adiciona padding para tornar a área clicável maior */

  &:hover {
    font-weight: bold;
    color: #fff;
    scale: 1.15;
  }

  &:active {
    color: #ff01b7;
    scale: 1.25;
  }

  /* Media Query para telas menores */
  @media (max-width: 1024px) {
    font-size: 18px; /* Reduz a fonte para telas médias */
    padding: 3px 8px;
  }
  @media (max-width: 800px) {
    font-size: 16px; /* Reduz ainda mais para tablets */
    padding: 2px 5px;
  }
 
  @media (max-width: 650px) {
    display: none;
  }
 
`;

export const Download = styled.img`
height: 28px;

@media (max-width: 650px) {
    display: none;
  }
`;