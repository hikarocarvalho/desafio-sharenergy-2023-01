import Search from "../../Components/Search/Search";
import List from "../../Components/ListComponents/List/List";
import "./User.css";

export default function User() {
  return (
    <section className="user page">
      <Search />
      <List />
    </section>
  );
}
