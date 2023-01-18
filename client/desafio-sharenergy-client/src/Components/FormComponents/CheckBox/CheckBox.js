import "./CheckBox.css";

export default function CheckBox(props){
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><input type="checkbox" aria-label="Checkbox for following text input" /></span>
            </div>
            <label class="form-control option" >{props.value}</label>
        </div>
    );
}