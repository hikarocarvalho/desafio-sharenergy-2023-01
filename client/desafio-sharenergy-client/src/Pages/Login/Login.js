import Button from '../../Components/FormComponents/Button/Button';
import CheckBox from '../../Components/FormComponents/CheckBox/CheckBox';
import Form from '../../Components/FormComponents/Form/Form';
import Input from '../../Components/FormComponents/Input/Input';
import './Login.css';

export default function Login(){
    return (
        <section className="login">
            <div className="login-out-box">
                <div className="login-container">
                    <Form>
                        <i class="bi bi-person logo"></i>
                        <Input type={"text"} label={"Usuário"} icon={"bi-person"} />
                        <Input type={"password"} label={"Senha"} icon={"bi-key"} />
                        <CheckBox value={"Manter conectado"} />
                        <Button description={"Entrar"} />
                    </Form>
                </div>
            </div>
        </section>
    );
};