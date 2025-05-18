import { Conteiner, Link } from "./styles"
import jslogo from '../../src/assets/jslogo.png'
import curriculo from '../../src/assets/curriculo.pdf'


function Header() {

    return (
        <>
            <Conteiner>
                <div>
                    <img src={jslogo} alt='logo' />
                    <p>Dev Front End</p>

                </div>

                <Link id="home">Home</Link>
                <Link href="https://github.com/JexSparrow" target="blank">Github</Link>
                <Link href="#projetos">Projetos</Link>
                <Link href="#contato">Contato</Link>
                <Link href={curriculo} download="Jeferson-Santos-de-Menezes">Download CV </Link>
            </Conteiner>
        </>
    )
}

export default Header