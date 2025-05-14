import me from "../../src/assets/me.png"
import solar from "../../src/assets/solar.mp4"
import { BackgroundVideo, Conteiner, DivParagrafo, DivTop, Simbolo } from "./styles";

function App() {
  return (
    <>

      <BackgroundVideo src={solar} autoPlay loop muted />

      <Conteiner>


        <DivTop>
          <div>
            <h1>Jeferson Santos <br></br>
              <span><Simbolo>&lt;</Simbolo> Front End Developer <Simbolo>/&gt;</Simbolo></span></h1>

            <DivParagrafo>
              <p>Olá! Tudo bom? Sejam Bem-Vindos!</p>
              <p>Me chamo Jeferson e estou em transição de carreira para a área de tecnologia, trazendo comigo habilidades valiosas adquiridas ao longo da minha trajetória profissional.</p>
              <p>Atualmente, estou me especializando em desenvolvimento web por meio da formação DevClub, onde realizo projetos práticos utilizando <span> HTML</span> ,<span> CSS</span> ,<span> JavaScript</span>,<span> React</span>, <span> Node.js</span>,<span> PostgreSQL</span> e <span> MongoDB</span> .</p>
              <p>Como freelancer na área de Front-End, desenvolvo interfaces modernas e responsivas, sempre focado em experiência do usuário, performance e boas práticas de desenvolvimento. Sempre motivado a criar soluções inovadoras e funcionais, garantindo que cada projeto seja bem estruturado, eficiente e com atenção aos detalhes.</p>

            </DivParagrafo>
          </div>

          <img src={me} alt="Jeferson Santos" />
        </DivTop>
      </Conteiner >
    </>

  );
}

export default App;