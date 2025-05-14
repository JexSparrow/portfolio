import { BackgroundVideo, Button, Conteiner, FormBox, Formulario, Input, Label, TextArea, Title } from "./styles";
import anomaly from '../../src/assets/anomaly.mp4';


function Form() {
    return (
        <Conteiner>

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