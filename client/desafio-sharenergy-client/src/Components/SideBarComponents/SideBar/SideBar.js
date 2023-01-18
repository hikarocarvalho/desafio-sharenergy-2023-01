import { Link } from "react-router-dom";
import SideBarItem from "../SideBarItem/SideBarItem";
import RouteList from "../../../Routes/RouteList";
import "./SideBar.css";

export default function SideBar() {
  return (
    <aside className="d-flex flex-column flex-shrink-0 bg-light side-menu">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        {RouteList.map((item, index) =>
          item.icon ? (
            <SideBarItem icon={item.icon} route={item.route} key={index} />
          ) : (
            ""
          )
        )}
      </ul>
      <div className="dropdown border-top">
        <Link
          to={""}
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i
            alt="mdo"
            width="24"
            height="24"
            className="bi bi-person-dash rounded-circle"
          ></i>
        </Link>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <span className="dropdown-item">Sign out</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
