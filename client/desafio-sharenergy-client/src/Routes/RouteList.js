import AuthPage from "../Components/AuthPage/AuthPage";
import Customers from "../Pages/Customer/Customers";
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
    element: (
      <AuthPage>
        <User />
      </AuthPage>
    ),
  },
  {
    icon: "bi-heptagon-fill",
    route: "/httpstatus",
    element: (
      <AuthPage>
        <HttpStatus />
      </AuthPage>
    ),
  },
  {
    icon: "bi-images",
    route: "/randomdog",
    element: (
      <AuthPage>
        <RandomDog />
      </AuthPage>
    ),
  },
  {
    icon: "bi-people-fill",
    route: "/customers",
    element: (
      <AuthPage>
        <Customers />
      </AuthPage>
    ),
  },
];

export default RouteList;
