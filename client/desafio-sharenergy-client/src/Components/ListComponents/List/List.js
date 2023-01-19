import ListController from "../ListController/ListController";
import ListItem from "../ListItem/ListItem";
import "./List.css";

export default function List(props) {
  return (
    <div className="list-container">
      {props.children}
      <div className="list-box">
        <div className="list">
          <ListItem />
        </div>
        <ListController />
      </div>
    </div>
  );
}
