import { Link, useLocation } from "react-router-dom";
import "./SideBarItem.css";

export default function SideBarItem(props) {
  const location = useLocation();
  return (
    <li className="nav-item">
      <Link
        to={props.route}
        className={
          location.pathname !== props.route
            ? "nav-link py-3 border-bottom"
            : "nav-link py-3 border-bottom active"
        }
      >
        <i className={"bi " + props.icon + " side-bar-icon"}></i>
      </Link>
    </li>
  );
}
