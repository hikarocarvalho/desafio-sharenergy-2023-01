import Button from "../../Components/FormComponents/Button/Button";
import "./RandomDog.css";

export default function RandomDog() {
  return (
    <section className="random-dog page">
      <div className="stats-container">
        <i className="bi bi-card-image cat-image"></i>
        <Button description={"Gerar Novo Cachorro"} />
      </div>
    </section>
  );
}
