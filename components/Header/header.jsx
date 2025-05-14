import { Conteiner, Link } from "./styles"
import logo from '../../src/assets/logo.png'


function Header() {

    return (
        <>
            <Conteiner>
                <img src={logo} alt='logo' />
                <Link>Home</Link>
                <Link>Sobre</Link>
                <Link>Projetos</Link>
                <Link>Contato</Link>
            </Conteiner>
        </>
    )
}

export default Header