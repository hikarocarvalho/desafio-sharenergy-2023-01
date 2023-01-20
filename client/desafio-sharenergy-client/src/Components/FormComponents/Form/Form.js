import "./Form.css";

export default function Form(props) {
  return props.onSubmit ? (
    <form
      className={props.className ? "form " + props.className : "form"}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  ) : (
    <form className={props.className ? "form " + props.className : "form"}>
      {props.children}
    </form>
  );
}
