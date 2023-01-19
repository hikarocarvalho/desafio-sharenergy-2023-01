import "./Input.css";

export default function Input(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <i class={"bi " + props.icon}></i>
        </span>
      </div>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.label}
        aria-label={props.label}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
