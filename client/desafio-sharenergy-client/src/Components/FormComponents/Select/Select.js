import "./Select.css";

export default function Select(props) {
  return props.onChange ? (
    <select
      className="form-select form-select-md mb-3"
      aria-label=".form-select-lg example"
      onChange={props.onChange}
    >
      {props.value
        ? props.value.map((statusCode, index) => (
            <option value={statusCode.value} key={"option" + index}>
              {statusCode.description}
            </option>
          ))
        : ""}
    </select>
  ) : (
    <select
      className="form-select form-select-md mb-3"
      aria-label=".form-select-lg example"
    >
      {props.value
        ? props.value.map((statusCode, index) => (
            <option value={statusCode.value} key={"option" + index}>
              {statusCode.description}
            </option>
          ))
        : ""}
    </select>
  );
}
