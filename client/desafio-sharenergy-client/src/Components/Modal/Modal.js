import { useContext } from "react";
import { ModalContext } from "./../../App";
import "./Modal.css";

export default function Modal(){
    const {appState, setAppState} = useContext(ModalContext);

    const closeModal = (event)=>{
        event.preventDefault();
        
        setAppState({
          ...appState,
          modal:{
            view:false,
            title:"",
            component:<></>
          }
        });
      }

    return (
        <>
        {appState.modal.view?
            <section className="modal-container">
                <article className="modal">
                    <div className="form-title">
                        <span></span>
                        <h1>{appState.modal.title}</h1>
                        <span className="close" onClick={closeModal}>X</span>
                    </div>
                    {appState.modal.component}
                </article>
            </section>
        :
        ""}
        </>
    );
}