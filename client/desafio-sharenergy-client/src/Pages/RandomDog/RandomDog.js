import { useState, useEffect } from "react";
import Button from "../../Components/FormComponents/Button/Button";
import "./RandomDog.css";
import Dog from "../../Entities/Dog";
import Img from "../../Components/Img/Img";

export default function RandomDog() {
  const [dog, setDog] = useState();

  const newDog = (event) => {
    event.preventDefault();
    Dog.getDog().then((response) => setDog(response.data));
  };

  useEffect(() => {
    if (!dog) {
      Dog.getDog().then((response) => setDog(response.data));
    }
  }, [dog]);

  return (
    <section className="random-dog page">
      <div className="stats-container">
        <Img src={Dog.url + dog} alt={"Random dog image"} />
        <Button description={"Gerar Novo Cachorro"} onClick={newDog} />
      </div>
    </section>
  );
}
