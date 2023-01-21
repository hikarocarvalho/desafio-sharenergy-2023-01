import ApiCrud from "../Api/ApiCrud";
import Cep from "../scripts/Cep";
import Cpf from "../scripts/Cpf";
import Empty from "../scripts/Empty";
import Telphone from "../scripts/Telphone";

const Customer = {
  payload: {
    name: "",
    cpf: "",
    email: "",
    telPhone: "",
    postCode: "",
    addressNumber: "",
    street: "",
    block: "",
    city: "",
    state: "",
    complement: "",
  },
  crud: {
    base: ApiCrud("challenge-server:3000/", "customer"),
    create: (data) => Customer.crud.base.create("customer", data),
    selectAll: () => Customer.crud.base.getAll("customer"),
    selectById: (id) => Customer.crud.base.getById("customer", id),
    update: (id, data) => Customer.crud.base.update("customer", data, id),
    delete: (id) => Customer.crud.base.delete("customer", id),
  },
  RegisterPayLoad: [
    [
      {
        type: "text",
        label: "Nome",
        icon: "bi-person",
        name: "inputName",
        onChange: Empty,
      },
      {
        type: "text",
        label: "Email",
        icon: "bi-envelope-paper",
        name: "inputEmail",
        onChange: Empty,
      },
      ,
      {
        type: "text",
        label: "Telefone",
        icon: "bi-headset",
        name: "inputTelphone",
        onChange: Empty,
        onKeyDown: Telphone.setMask,
        maxLength: 15,
      },
      ,
      {
        type: "text",
        label: "Cpf",
        icon: "bi-person",
        name: "inputCpf",
        onKeyDown: Cpf.setMask,
        onChange: Cpf.validator,
        maxLength: 14,
      },
    ],
    [
      {
        type: "text",
        label: "Cep",
        icon: "bi-building",
        name: "inputPostCode",
        onKeyDown: Cep.setMask,
        onChange: Cep.validator,
        maxLength: 9,
      },
      {
        type: "text",
        label: "Estado",
        icon: "bi-building",
        name: "inputState",
        onChange: Empty,
      },
      {
        type: "text",
        label: "City",
        icon: "bi-building",
        name: "inputCity",
        onChange: Empty,
      },
      {
        type: "text",
        label: "Bairro",
        icon: "bi-building",
        name: "inputBlock",
        onChange: Empty,
      },
      {
        type: "text",
        label: "Logradouro",
        icon: "bi-building",
        name: "inputStreet",
        onChange: Empty,
      },
      {
        type: "text",
        label: "Complemento",
        icon: "bi-building",
        name: "inputComplement",
        onChange: Empty,
      },
    ],
  ],
};

export default Customer;
