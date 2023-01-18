import "./Button.css";

export default function Button(props){
    return(
        <button className="btn btn-success btn-md">{props.description}</button>
    );
}