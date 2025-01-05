import { NavLink } from "react-router";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-4 py-2">
          <NavLink to="/">
            <img className="h-20 inline-block" src={logo}></img>
          </NavLink>
        </div>
        <div className="px-5 py-2">
          <NavLink to="/" className="mx-5">
            Home
          </NavLink>
          <NavLink to="/userDashboard" className="mx-5">
            Dashboard
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
