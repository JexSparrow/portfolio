import React, { useState } from 'react';
import {
    Conteiner,
    Download,
    Link,
    LogoWrapper,
    HamburgerIcon,
    Sidebar,
    Overlay,
    LinkSidebar
} from "./styles";
import jslogo from '../../src/assets/jslogo.png';
import downloadIcon from '../../src/assets/download.svg';
import curriculo from '../../src/assets/curriculo.pdf';


function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Overlay para escurecer o fundo quando a sidebar está aberta */}
            {isSidebarOpen && <Overlay onClick={closeSidebar} />}

            {/* Ícone Hamburger - AGORA FORA DO CONTEINER para melhor controle de z-index */}
            {/* Posicionado fixo para sempre estar visível e clicável, mesmo com scroll */}
            <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerIcon>

            <Conteiner>
                <LogoWrapper>
                    <img src={jslogo} alt='logo' />
                    <p>Dev Front End</p>
                </LogoWrapper>

                {/* Links para desktop */}
                <Link href="#home">Home</Link>
                <Link href="https://github.com/JexSparrow" target="blank">Github</Link>
                <Link href="#projetos">Projetos</Link>
                <Link href="#contato">Contato</Link>

                {/* Grupo de Download CV para desktop */}
                <div className="desktop-download-cv">
                    <Link href={curriculo} download="Jeferson-Santos-de-Menezes">Download CV </Link>
                    <Download src={downloadIcon} />
                </div>
            </Conteiner>

            {/* Sidebar (Menu Lateral) */}
            <Sidebar isOpen={isSidebarOpen}>
                {/* Links dentro da sidebar */}
                <LinkSidebar href="#home" onClick={closeSidebar}>Home</LinkSidebar>
                <LinkSidebar href="https://github.com/JexSparrow" target="blank" onClick={closeSidebar}>Github</LinkSidebar>
                <LinkSidebar href="#projetos" onClick={closeSidebar}>Projetos</LinkSidebar>
                <LinkSidebar href="#contato" onClick={closeSidebar}>Contato</LinkSidebar>

                {/* Link de Download CV na sidebar */}
                <LinkSidebar href={curriculo} download="Jeferson-Santos-de-Menezes" onClick={closeSidebar}>
                    Download CV <img src={downloadIcon} alt="Download" style={{ marginLeft: '5px', height: '1em', verticalAlign: 'middle' }} />
                </LinkSidebar>
            </Sidebar>
        </>
    );
}

export default Header;