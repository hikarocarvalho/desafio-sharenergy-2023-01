import "./ListItem.css";

export default function ListItem() {
  return (
    <div className="list-item">
      <i className="bi bi-person-dash photo"></i>
      <div className="data-name">
        <label className="name">Nome Completo:</label>
        <label className="data">Bruna jhonas</label>
      </div>
      <div className="data-email">
        <label className="email">Email:</label>
        <label className="data">bruna@gmail.com</label>
      </div>
      <div className="data-username">
        <label className="username">Username:</label>
        <label className="data">brunajhonas</label>
      </div>
      <div className="data-age">
        <label className="age">Idade:</label>
        <label className="data">25</label>
      </div>
    </div>
  );
}
