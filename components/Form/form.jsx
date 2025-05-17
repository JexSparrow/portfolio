import { BackgroundVideo, Button, Conteiner, FormBox, Formulario, Input, Label, TextArea, Title, Whatsapp } from "./styles";
import anomaly from '../../src/assets/anomaly.mp4';
import whatsapp from '../../src/assets/whatsapp.png'
import { useRef, useEffect } from 'react'; // Importe useRef e useEffect


function Form() {

    const formRef = useRef(null); // Crie uma ref para o container principal

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
                <Formulario>
                    <div>
                        <Label>Nome</Label>
                        <Input />

                    </div>

                    <div>
                        <Label>E-mail</Label>
                        <Input />

                    </div>

                    <div>
                        <Label>Assunto</Label>
                        <TextArea />

                    </div>

                    <Button><span>Enviar</span></Button>

                </Formulario>

            </FormBox>

            <Whatsapp href="https://wa.me/5541999233349?text=Ol%C3%A1%2C%20tudo%20bem%3F%20%0AGostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20referente%20ao%20seu%20trabalho." target="_blank">
                <img src={whatsapp} />
            </Whatsapp>


        </Conteiner>
    )
}

export default Form;