import { Routes, Route } from "react-router-dom";
import RouteList from "./RouteList";

export default function PageRoutes() {
  return (
    <Routes>
      {RouteList.map((route) => (
        <Route path={route.route} element={route.element} />
      ))}
    </Routes>
  );
}
