import { Conteiner, Link } from "./styles"
import logo from '../../src/assets/logo.png'
import curriculo from '../../src/assets/curriculo.pdf'


function Header() {

    return (
        <>
            <Conteiner>
                <img src={logo} alt='logo' />
                <Link>Home</Link>
                <Link href="https://github.com/JexSparrow" target="blank">Github</Link>
                <Link href="#projetos">Projetos</Link>
                <Link href="#contato">Contato</Link>
                <Link href={curriculo} download="Jeferson-Santos-de-Menezes">Download CV </Link>
            </Conteiner>
        </>
    )
}

export default Header