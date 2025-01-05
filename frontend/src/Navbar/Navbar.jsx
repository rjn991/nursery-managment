import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="px-4 py-2">
          <p className="text-xl font-bold">Nursery Management</p>
        </div>
        <div className="px-5 py-2">
          <NavLink to="/home" className="mx-5">
            Home
          </NavLink>
          <NavLink to="/home" className="mx-5">
            Dashboard
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
