import { useState, useEffect } from "react";
import Select from "../../Components/FormComponents/Select/Select";
import "./HttpStatus.css";
import Img from "../../Components/Img/Img";

export default function HttpStatus() {
  const [catImage, setCatImage] = useState();
  const selectStatusList = [""];

  const generateList = () => {
    for (let count = 100; count < 600; count++) {
      selectStatusList.push({
        value: count,
        description: count,
      });
    }
  };

  generateList();

  const getStatusValue = (event) => {
    event.preventDefault();
    setCatImage(event.target.value);
  };

  return (
    <section className="http-status page">
      <div className="stats-container">
        <Img src={"https://http.cat/" + catImage} />
        <Select value={selectStatusList} onChange={getStatusValue} />
      </div>
    </section>
  );
}
