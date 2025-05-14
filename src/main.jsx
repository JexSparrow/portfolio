import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalProvider } from 'styled-react-modal';
import App from '../components/Main/index.jsx'
import Header from '../components/Header/header.jsx'
import Footer from '../components/Footer/footer.jsx'
import Carrosel from '../components/Carrosel/carrosel.jsx'
import Projetos from '../components/Projetos/projetos.jsx'
import Marquee from '../components/Marquee/marquee.jsx';
import Form from '../components/Form/form.jsx';

import GlobalStyles from './styles/globalStyles.js';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <GlobalStyles />
      <Header />
      <App />
      <Carrosel />
      <Projetos />
      <Form />

      <Footer />
    </ModalProvider>
  </StrictMode>,
)