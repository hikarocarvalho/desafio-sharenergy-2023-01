import "./Select.css";

export default function Select() {
  return (
    <select
      className="form-select form-select-md mb-3"
      aria-label=".form-select-lg example"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
}
