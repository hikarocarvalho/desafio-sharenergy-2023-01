import Customer from "../Pages/Customer/Customer";
import HttpStatus from "../Pages/HttpStatus/HttpStatus";
import Login from "../Pages/Login/Login";
import RandomDog from "../Pages/RandomDog/RandomDog";
import User from "../Pages/User/User";

const RouteList = [
  {
    route: "/",
    element: <Login />,
  },
  {
    icon: "bi-house-door-fill",
    route: "/users",
    element: <User />,
  },
  {
    icon: "bi-heptagon-fill",
    route: "/httpstatus",
    element: <HttpStatus />,
  },
  {
    icon: "bi-images",
    route: "/randomdog",
    element: <RandomDog />,
  },
  {
    icon: "bi-people-fill",
    route: "/customers",
    element: <Customer />,
  },
];

export default RouteList;
