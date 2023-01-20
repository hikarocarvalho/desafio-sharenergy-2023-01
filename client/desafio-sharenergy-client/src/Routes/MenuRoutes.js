import { Routes, Route } from "react-router-dom";
import SideBar from "../Components/SideBarComponents/SideBar/SideBar";
import RouteList from "./RouteList";

export default function MenuRoutes() {
  return (
    <Routes>
      {RouteList.map((route, index) =>
        route.icon ? (
          <Route
            path={route.route}
            element={<SideBar />}
            key={"menu" + index}
          />
        ) : (
          ""
        )
      )}
    </Routes>
  );
}
