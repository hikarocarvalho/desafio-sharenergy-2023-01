import "./Button.css";

export default function Button(props) {
  return props.onClick ? (
    <button
      className={
        props.className
          ? "btn btn-success btn-md " + props.className
          : "btn btn-success btn-md"
      }
      onClick={props.onClick}
    >
      {props.description}
    </button>
  ) : (
    <button
      className={
        props.className
          ? "btn btn-success btn-md " + props.className
          : "btn btn-success btn-md"
      }
    >
      {props.description}
    </button>
  );
}
