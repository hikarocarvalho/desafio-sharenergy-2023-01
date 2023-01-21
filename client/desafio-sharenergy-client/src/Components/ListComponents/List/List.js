import ListController from "../ListController/ListController";
import ListItem from "../ListItem/ListItem";
import "./List.css";

export default function List(props) {
  const goBack = (event) => {
    event.preventDefault();
    props.back();
  };

  const goNext = (event) => {
    event.preventDefault();
    props.next();
  };

  return (
    <div className="list-container">
      {props.children}
      <div className="list-box">
        <div className="list">
          {props.dataList
            ? props.dataList.map((dataItem, index) => (
                <ListItem data={dataItem} key={"listItem" + index} />
              ))
            : ""}
        </div>
        <ListController next={goNext} back={goBack} />
      </div>
    </div>
  );
}
