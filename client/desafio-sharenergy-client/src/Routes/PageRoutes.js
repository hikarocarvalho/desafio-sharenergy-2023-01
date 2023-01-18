import {
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import User from "../Pages/User/User";
import HttpStatus from "../Pages/HttpStatus/HttpStatus";
import RandomDog from "../Pages/RandomDog/RandomDog";
import Customer from "../Pages/Customer/Customer";

export default function PageRoutes(){
    return (
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users" element={<User />}/>
          <Route path="/httpstatus" element={<HttpStatus />}/>
          <Route path="/randomdog" element={<RandomDog />}/>
          <Route path="/customer" element={<Customer />}/>         
        </Routes>
    );
}