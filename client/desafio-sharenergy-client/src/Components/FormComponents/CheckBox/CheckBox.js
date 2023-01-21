import "./CheckBox.css";

export default function CheckBox(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            name={props.name ? props.name : undefined}
          />
        </span>
      </div>
      <label className="form-control option">{props.value}</label>
    </div>
  );
}
