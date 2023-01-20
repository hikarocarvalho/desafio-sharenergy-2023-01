import Input from "../FormComponents/Input/Input";
import Button from "../FormComponents/Button/Button";
import Form from "../FormComponents/Form/Form";
import "./Search.css";

export default function Search(props) {
  return (
    <article className="search-container">
      <Form onSubmit={props.onSubmit}>
        <Input
          type={"text"}
          label={"Pesquisar (nome, email, username)"}
          icon={"bi-search"}
          name={"inputSearchValue"}
        />
        <Button description={"Pesquisar"} />
      </Form>
    </article>
  );
}
