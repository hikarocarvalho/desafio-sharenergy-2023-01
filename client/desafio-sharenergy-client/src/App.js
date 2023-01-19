import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import MenuRoutes from "./Routes/MenuRoutes";
import PageRoutes from "./Routes/PageRoutes";
import Modal from "./Components/Modal/Modal";
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
    </div>
  );
}

export default App;
