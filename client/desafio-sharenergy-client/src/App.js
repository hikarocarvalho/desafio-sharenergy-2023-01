import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import MenuRoutes from "./Routes/MenuRoutes";
import PageRoutes from "./Routes/PageRoutes";
import Modal from "./Components/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export const ModalContext = createContext(null);

function App() {
  const [appState, setAppState] = useState({
    modal: {
      view: false,
      title: "",
      component: <></>,
    },
  });

  useEffect(() => {}, []);

  return (
    <div className="App">
      <ModalContext.Provider value={{ appState, setAppState }}>
        <BrowserRouter>
          <MenuRoutes />
          <PageRoutes />
        </BrowserRouter>
        <Modal />
      </ModalContext.Provider>
      <ToastContainer
        position="bottom-right"
        toastStyle={{
          backgroundColor: "var(--defaultSixthColor)",
          color: "black",
          fill: "var(--defaultThirdColor)",
        }}
      />
    </div>
  );
}

export default App;
