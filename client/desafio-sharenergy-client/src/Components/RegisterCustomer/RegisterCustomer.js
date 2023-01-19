import Form from "../FormComponents/Form/Form";
import Fieldset from "../FormComponents/Fieldset/Fieldset";
import Button from "../FormComponents/Button/Button";
import Input from "../FormComponents/Input/Input";
import "./RegisterCustomer.css";

export default function RegisterCustomer() {
  return (
    <Form className={"register-customer"}>
      <Fieldset title={"Dados Pessoais"}>
        <Input type={"text"} label={"Nome"} icon={"bi-person"} />
        <Input type={"text"} label={"Email"} icon={"bi-envelope-paper"} />
        <Input type={"text"} label={"Telefone"} icon={"bi-headset"} />
        <Input type={"text"} label={"Cpf"} icon={"bi-person"} />
      </Fieldset>
      <Fieldset title={"Dados de Endereço"}>
        <Input type={"text"} label={"Cep"} icon={"bi-building"} />
        <Input type={"text"} label={"Logradouro"} icon={"bi-building"} />
        <Input type={"text"} label={"Complemento"} icon={"bi-building"} />
        <Input type={"text"} label={"Bairro"} icon={"bi-building"} />
        <Input type={"text"} label={"Cidade"} icon={"bi-building"} />
        <Input type={"text"} label={"Estado"} icon={"bi-building"} />
        <Button description={"Registrar"} />
      </Fieldset>
    </Form>
  );
}
