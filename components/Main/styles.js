import styled, { keyframes } from "styled-components";

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

export const BackgroundVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  pointer-events: none;
  filter: brightness(0.75);
`;

export const Conteiner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #01fffe 0px -30px 60px -30px;
`;

export const Simbolo = styled.span`
  color: #ff01b7;
`;

export const DivTop = styled.div`
  background-color: rgba(45, 8, 76, 0.75);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 5%;
  padding: 4% 2.5%;
  box-shadow: rgb(0, 0, 0) 0px -50px 20px -28px inset;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px 2.5%;
    justify-content: center;
    min-height: auto;
  }

  @media (max-width: 800px) {
    padding: 12% 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    z-index: 1;
    pointer-events: auto;
    margin: 20px 0;

    @media (max-width: 1200px) {
      align-items: center;
      text-align: center;
      flex-basis: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }

  p {
    font-family: 'Anta';
    font-size: 22px;
    color: aliceblue;
    margin: 10px 0;
    animation: ${slideInLeft} 1.2s ease-out forwards;
    animation-delay: 500ms;
    transform: translateX(-100%);
    opacity: 0;

    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h1 {
    font-family: 'Orbitron';
    text-shadow: 3px 1px 5px rgba(0, 183, 174, 0.81);
    letter-spacing: 10px;
    font-size: 72px;
    color: aliceblue;
    font-weight: 800;
    margin-bottom: 20px;
    animation: ${slideInLeft} 1.2s ease-out forwards;
    animation-delay: 300ms;
    transform: translateX(-100%);
    opacity: 0;

    @media (max-width: 1326px) {
      font-size: 3.5rem;
      letter-spacing: 7px;
    }
    @media (max-width: 768px) {
      font-size: 2.5rem;
      letter-spacing: 5px;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
      letter-spacing: 3px;
    }
  }

  span {
    font-family: 'Orbitron';
    font-size: 52px;
    letter-spacing: 0px;
    transition: 200ms all ease-in-out;

    &:hover {
      color: aliceblue;
    }

    @media (max-width: 1326px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  img {
    height: 450px;
    border-radius: 50%;
    z-index: 1;
    pointer-events: auto;
    box-shadow: rgba(0, 150, 158, 0.56) 0px -10px 70px 20px;
    transition: 250ms box-shadow ease-in-out, 250ms scale ease-in-out;
    transform: translateX(100%);
    opacity: 0;

    &:hover {
      box-shadow: rgba(251, 255, 0, 0.83) 0px 0px 150px 10px;
      scale: 0.98;
    }

    animation: ${slideInRight} 1.2s ease-out forwards;
    animation-delay: 300ms;

    @media (max-width: 1326px) {
      height: 300px;
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      height: 200px;
      margin-top: 15px;
    }
    @media (max-width: 500px) {
      height: 150px;
      margin-top: 10px;
    }
  }
`;

export const DivParagrafo = styled.div`
  display: flex;
  flex-direction: column;

  > p:first-of-type {
    font-size: 28px;

    @media (max-width: 800px) {
      display: none;
    }
  }

  span {
    font-size: 26px;
    color: #01fffe;
    font-family: 'Anta';
    transition: 200ms all ease-in-out;

    &:hover {
      color: aliceblue;
    }

    @media (max-width: 1326px) {
      font-size: 1.3rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  > div {
    span:nth-of-type(2):hover,
    span:nth-of-type(1):hover {
      color: yellow;
    }
  }
`;