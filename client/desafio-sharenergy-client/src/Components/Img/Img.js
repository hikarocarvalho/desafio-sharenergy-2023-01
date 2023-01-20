import "./Img.css";

export default function Img(props) {
  return (
    <>
      {props.src ? (
        props.src.includes(".mp4") ? (
          <iframe src={props.src} className="video" />
        ) : (
          <img src={props.src} className="image" />
        )
      ) : (
        ""
      )}
    </>
  );
}
