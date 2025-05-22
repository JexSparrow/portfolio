import { Conteiner, Download, Link, LogoWrapper } from "./styles"
import jslogo from '../../src/assets/jslogo.png'
import download from '../../src/assets/download.svg'
import curriculo from '../../src/assets/curriculo.pdf'


function Header() {

    return (
        <>
            <Conteiner>
                <LogoWrapper>
                    <img src={jslogo} alt='logo' />
                    <p>Dev Front End</p>

                </LogoWrapper>

                <Link id="home">Home</Link>
                <Link href="https://github.com/JexSparrow" target="blank">Github</Link>
                <Link href="#projetos">Projetos</Link>
                <Link href="#contato">Contato</Link>

                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: 10 }}>
                    <Link href={curriculo} download="Jeferson-Santos-de-Menezes">Download CV </Link >
                    <Download src={download} />
                </div>

            </Conteiner>
        </>
    )
}

export default Header