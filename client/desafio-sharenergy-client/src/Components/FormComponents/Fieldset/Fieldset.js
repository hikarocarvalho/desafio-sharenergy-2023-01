import "./Fieldset.css";

export default function Fieldset(props) {
  return (
    <fieldset className="fieldset">
      <legend>{props.title}</legend>
      {props.children}
    </fieldset>
  );
}
