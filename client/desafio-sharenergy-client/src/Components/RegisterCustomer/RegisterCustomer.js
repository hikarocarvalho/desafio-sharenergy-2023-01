import Form from "../FormComponents/Form/Form";
import Fieldset from "../FormComponents/Fieldset/Fieldset";
import Button from "../FormComponents/Button/Button";
import Input from "../FormComponents/Input/Input";
import "./RegisterCustomer.css";
import Cep from "../../scripts/Cep";
import Cpf from "../../scripts/Cpf";
import Telphone from "../../scripts/Telphone";
import Customer from "../../Entities/Customer";

export default function RegisterCustomer() {
  return (
    <Form className={"register-customer"}>
      <Fieldset title={"Dados Pessoais"}>
        {Customer.RegisterPayLoad[0].map((input, index) => (
          <Input
            type={input.type ? input.type : undefined}
            label={input.label ? input.label : undefined}
            icon={input.icon ? input.icon : undefined}
            onKeyDown={input.onKeyDown ? input.onKeyDown : undefined}
            onChange={input.onChange ? input.onChange : undefined}
            maxLength={input.maxLength ? input.maxLength : undefined}
            name={input.name ? input.name : undefined}
            key={input.name + index}
          />
        ))}
      </Fieldset>
      <Fieldset title={"Dados de Endereço"}>
        {Customer.RegisterPayLoad[1].map((input, index) => (
          <Input
            type={input.type ? input.type : undefined}
            label={input.label ? input.label : undefined}
            icon={input.icon ? input.icon : undefined}
            onKeyDown={input.onKeyDown ? input.onKeyDown : undefined}
            onChange={input.onChange ? input.onChange : undefined}
            maxLength={input.maxLength ? input.maxLength : undefined}
            name={input.name ? input.name : undefined}
            key={input.name + index}
          />
        ))}
        <Button description={"Registrar"} />
      </Fieldset>
    </Form>
  );
}
