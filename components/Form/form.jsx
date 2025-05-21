import { Arrow, BackgroundVideo, Button, Conteiner, FormBox, Formulario, Input, Label, TextArea, Title, Whatsapp } from "./styles";
import anomaly from '../../src/assets/anomaly.mp4';
import whatsapp from '../../src/assets/whatsapp.png';
import arrowup from '../../src/assets/arrowup.svg';
import { useRef, useEffect, useState } from 'react'; // Importe useRef e useEffect

import emailjs from '@emailjs/browser';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importe os estilos CSS
import './custom-toast.css'; // SEU CSS PERSONALIZADO (importar DEPOIS)



function Form() {

    const formRef = useRef(null); // Crie uma ref para o container principal
    const formEmailRef = useRef();
    const titleRef = useRef(null);
    const [titleIsVisible, setTitleIsVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Acesse as variáveis de ambiente com process.env e o prefixo correto
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Verificação básica para garantir que as variáveis foram carregadas
        if (!serviceId || !templateId || !publicKey) {
            toast.error('💥 Erro: Chaves de API não configuradas corretamente.', {
                toastClassName: 'my-custom-toast',
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            console.error('Variaveis de ambiente para EmailJS não localizadas!');
            return;
        }

        emailjs.sendForm(serviceId, templateId, formEmailRef.current, publicKey)
            .then(() => {
                toast.info('📩 Email enviado com sucesso!', {
                    toastClassName: 'my-custom-toast',
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,

                });
                formEmailRef.current.reset();
            }, (error) => {
                toast.error(' 💥 Ocorreu um erro ao enviar a o Email. Tente novamente mais tarde!', {
                    toastClassName: 'my-custom-toast',
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                console.error('EmailJS error:', error);
            });
    };

    useEffect(() => {
        if (formRef.current) {
            formRef.current.id = 'contato'; // Defina o ID da seção de contato
        }
    }, []);

    useEffect(() => {
        // Captura os valores atuais dos refs no início do efeito
        // Isso resolve o aviso do ESLint sobre refs em funções de cleanup
        const currentTitleRef = titleRef.current;


        // Observer para o h1
        const titleObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTitleIsVisible(true);
                        titleObserver.unobserve(entry.target); // Para disparar a animação apenas uma vez
                    }
                });
            },
            { threshold: 1 } // Sugestão para teste: anima com 10% visível
        );

        if (currentTitleRef) {
            titleObserver.observe(currentTitleRef);
        }


        // Cleanup function para desconectar os observers quando o componente desmontar
        return () => {
            if (currentTitleRef) titleObserver.unobserve(currentTitleRef);

        };
    }, []); // As dependências estão vazias porque os observers e refs não mudam entre renderizações


    return (
        <Conteiner ref={formRef}>

            <BackgroundVideo src={anomaly} autoPlay loop muted />



            <Title ref={titleRef} $isVisible={titleIsVisible}>Entre em Contato</Title>
            <FormBox>
                <Formulario ref={formEmailRef} onSubmit={sendEmail}>
                    <div>
                        <Label>Nome</Label>
                        <Input type="text" name="from_name" required />
                    </div>

                    <div>
                        <Label>E-mail</Label>
                        <Input type="email" name="from_email" required />
                    </div>

                    <div>
                        <Label>Assunto</Label>
                        <Input type="text" name="subject" required></Input>
                    </div>

                    <div>
                        <Label>Mensagem</Label>
                        <TextArea type="text" name="message" />
                    </div>

                    <Button type="submit" value="send"><span>Enviar</span></Button>

                </Formulario>

            </FormBox>

            <Whatsapp href="https://wa.me/5541999233349?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%0AGostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20referente%20ao%20seu%20trabalho." target="_blank">
                <img src={whatsapp} />
            </Whatsapp>

            <Arrow href="#home">
                <img src={arrowup} />
            </Arrow>

            <ToastContainer />


        </Conteiner>
    )
}

export default Form;