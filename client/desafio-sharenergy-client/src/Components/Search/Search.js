import Input from "../FormComponents/Input/Input";
import Button from "../FormComponents/Button/Button";
import "./Search.css";

export default function Search() {
  return (
    <article className="search-container">
      <Input
        type={"text"}
        label={"Pesquisar (nome, email, username)"}
        icon={"bi-search"}
      />
      <Button description={"Pesquisar"} />
    </article>
  );
}
