import { BackgroundVideo, Button, Conteiner, FormBox, Formulario, Input, Label, TextArea, Title } from "./styles";
import anomaly from '../../src/assets/anomaly.mp4';
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


        </Conteiner>
    )
}

export default Form;