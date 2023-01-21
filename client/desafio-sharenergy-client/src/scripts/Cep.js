import ApiCrud from "../Api/ApiCrud";

const Cep = {
  validator: (event) => {
    const postCode = event.target.value;
    const parentElementDefault = event.target.parentElement.parentElement;
    const address = {
      state: parentElementDefault.children[2].children[1],
      city: parentElementDefault.children[3].children[1],
      block: parentElementDefault.children[4].children[1],
      street: parentElementDefault.children[5].children[1],
      complement: parentElementDefault.children[6].children[1],
    };
    if (postCode.length === 9) {
      return ApiCrud("https://viacep.com.br/", "cep")
        .getById("ws", postCode + "/json/")
        .then((response) => {
          address.state.value = response.data.uf;
          address.city.value = response.data.localidade;
          address.block.value = response.data.bairro;
          address.street.value = response.data.logradouro;
          address.complement.value = response.data.complemento;
        });
    }
  },
  setMask: (event) => {
    const postCodeElement = event.target;
    if (parseInt(event.key) || event.key == 0) {
      if (event.key.match(/^[0-9]*$/)) {
        if (postCodeElement.value.length === 5) {
          postCodeElement.value = postCodeElement.value + "-";
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

export default Cep;
