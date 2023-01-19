import "./Form.css";

export default function Form(props) {
  return (
    <form className={props.className ? "form " + props.className : "form"}>
      {props.children}
    </form>
  );
}
