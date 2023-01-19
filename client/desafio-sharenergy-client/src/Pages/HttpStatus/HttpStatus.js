import Select from "../../Components/FormComponents/Select/Select";
import "./HttpStatus.css";

export default function HttpStatus() {
  return (
    <section className="http-status page">
      <div className="stats-container">
        <i className="bi bi-card-image cat-image"></i>
        <Select />
      </div>
    </section>
  );
}
