import { Arrow, BackgroundVideo, Button, Conteiner, FormBox, Formulario, Input, Label, TextArea, Title, Whatsapp } from "./styles";
import anomaly from '../../src/assets/anomaly.mp4';
import whatsapp from '../../src/assets/whatsapp.png';
import arrowup from '../../src/assets/arrowup.svg';
import { useRef, useEffect } from 'react'; // Importe useRef e useEffect

import emailjs from '@emailjs/browser';


function Form() {

    const formRef = useRef(null); // Crie uma ref para o container principal
    const formEmailRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Substitua pelos IDs que você obteve no EmailJS
        emailjs.sendForm('service_123456email', 'template_rrcrlr1', formEmailRef.current, 'eSlebE2D61Tmmoxta')
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                formEmailRef.current.reset(); // Limpa o formulário após o envio
            }, (error) => {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                console.error('EmailJS error:', error);
            });
    };

    useEffect(() => {
        if (formRef.current) {
            formRef.current.id = 'contato'; // Defina o ID da seção de contato
        }
    }, []);


    return (
        <Conteiner ref={formRef}>

            <BackgroundVideo src={anomaly} autoPlay loop muted />



            <Title>Entre em Contato</Title>
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
                        <Input name="subject" required></Input>
                    </div>

                    <div>
                        <Label>Mensagem</Label>
                        <TextArea name="message" />
                    </div>

                    <Button type="submit" ><span>Enviar</span></Button>

                </Formulario>

            </FormBox>

            <Whatsapp href="https://wa.me/5541999233349?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%0AGostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20referente%20ao%20seu%20trabalho." target="_blank">
                <img src={whatsapp} />
            </Whatsapp>

            <Arrow href="#home">
                <img src={arrowup} />
            </Arrow>


        </Conteiner>
    )
}

export default Form;