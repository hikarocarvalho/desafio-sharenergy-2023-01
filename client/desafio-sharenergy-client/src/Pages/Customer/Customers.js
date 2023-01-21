import Search from "../../Components/Search/Search";
import List from "../../Components/ListComponents/List/List";
import "./Customers.css";
import Button from "../../Components/FormComponents/Button/Button";
import { ModalContext } from "../../App";
import { useContext, useEffect } from "react";
import RegisterCustomer from "../../Components/RegisterCustomer/RegisterCustomer";

export default function Customers() {
  const { appState, setAppState } = useContext(ModalContext);

  const newCustomer = (event) => {
    event.preventDefault();
    setAppState({
      ...appState,
      modal: {
        view: true,
        title: "Registrar Novo Cliente",
        component: <RegisterCustomer />,
      },
    });
  };

  useEffect(() => {}, []);

  return (
    <section className="customer page">
      <Search />

      <List>
        <Button description={"+"} className="add" onClick={newCustomer} />
      </List>
    </section>
  );
}
