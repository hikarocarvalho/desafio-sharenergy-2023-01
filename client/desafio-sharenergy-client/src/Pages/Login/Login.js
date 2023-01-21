import Button from "../../Components/FormComponents/Button/Button";
import CheckBox from "../../Components/FormComponents/CheckBox/CheckBox";
import Form from "../../Components/FormComponents/Form/Form";
import Input from "../../Components/FormComponents/Input/Input";
import Auth from "../../Entities/Auth";
import "./Login.css";

export default function Login() {
  const setLogin = (event) => {
    event.preventDefault();
    const preload = {
      name: event.target.inputName.value,
      password: event.target.inputPassword.value,
    };
    Auth.crud
      .login(preload)
      .then((response) => Auth.setToken(response.data.token));
  };

  return (
    <section className="login">
      <div className="login-out-box">
        <div className="login-container">
          <Form onSubmit={setLogin}>
            <i className="bi bi-person logo"></i>
            <Input
              type={"text"}
              label={"Usuário"}
              icon={"bi-person"}
              name={"inputName"}
            />
            <Input
              type={"password"}
              label={"Senha"}
              icon={"bi-key"}
              name={"inputPassword"}
            />
            <CheckBox value={"Manter conectado"} name={"inputRemember"} />
            <Button description={"Entrar"} />
          </Form>
        </div>
      </div>
    </section>
  );
}
