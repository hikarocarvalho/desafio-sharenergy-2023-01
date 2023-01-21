import Button from "../../FormComponents/Button/Button";
import "./ListController.css";

export default function ListController(props) {
  return (
    <div className="list-controller">
      <Button description={"anterior"} onClick={props.back} />
      <Button description={"proximo"} onClick={props.next} />
    </div>
  );
}
