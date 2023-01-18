import {
  Routes,
  Route,
} from "react-router-dom";
import SideBar from "../Components/SideBarComponents/SideBar/SideBar";

export default function MenuRoutes(){
    return (
        <Routes>
            <Route path="/users" element={<SideBar />}/>
            <Route path="/httpstatus" element={<SideBar />}/>
            <Route path="/randomdog" element={<SideBar />}/>
            <Route path="/customer" element={<SideBar />}/>         
        </Routes>
    );
}