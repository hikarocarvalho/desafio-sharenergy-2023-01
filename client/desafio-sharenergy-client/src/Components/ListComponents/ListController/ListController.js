import Button from "../../FormComponents/Button/Button";
import "./ListController.css";

export default function ListController() {
  return (
    <div className="list-controller">
      <Button description={"anterior"} />
      <label>1-2-3-4</label>
      <Button description={"proximo"} />
    </div>
  );
}
