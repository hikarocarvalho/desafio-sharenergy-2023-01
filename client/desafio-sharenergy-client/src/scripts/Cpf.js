import { cpf } from "cpf-cnpj-validator";
const Cpf = {
  validator: (event) => {
    let cpfNumber = event.target.value;

    if (cpf.isValid(cpfNumber)) {
      event.target.style.borderColor = "green";
    } else {
      event.target.style.borderColor = "red";
    }
  },
  setMask: (event) => {
    const cpfElement = event.target;
    if (parseInt(event.key) || event.key == 0) {
      if (event.key.match(/^[0-9]*$/)) {
        if (cpfElement.value.length === 3 || cpfElement.value.length === 7) {
          cpfElement.value = cpfElement.value + ".";
        } else if (cpfElement.value.length === 11) {
          cpfElement.value = cpfElement.value + "-";
        }
      }
    } else {
      if (
        !parseInt(event.key) &&
        event.key.match(/[A-Za-z]/) &&
        event.key.length === 1
      ) {
        alert("Por favor utilize numeros!");
      }
    }
  },
};

export default Cpf;
