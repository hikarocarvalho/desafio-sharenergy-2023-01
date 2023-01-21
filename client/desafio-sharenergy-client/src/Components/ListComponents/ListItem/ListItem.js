import "./ListItem.css";

export default function ListItem(props) {
  return (
    <>
      {props.data ? (
        <div className="list-item">
          {props.data.map((values, index) =>
            values.dataTitle === "photo" ? (
              <img
                className="photo"
                src={(values = values.dataValue)}
                key={"UserPhoto" + index}
                alt={"User Photo" + index}
              />
            ) : (
              ""
            )
          )}
          {props.data.map((values, index) =>
            values.dataTitle !== "photo" ? (
              <div className="data" key={values.dataTitle + index}>
                <label className="data-title">{values.dataTitle}:</label>
                <label className="data-value">{values.dataValue}</label>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
