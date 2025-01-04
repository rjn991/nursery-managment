import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button"

const UserDashboard = () => {
  return (
      <>
        <Navbar></Navbar>
        <p>User Dashboard</p>
        <div className="flex p-5 gap-28">
          <div className="flex-1">
            <div className="w-56 ml-auto mr-0">
              <p>Seed</p>
              <NavLink to="/viewSeeds">
                <Button className="block  my-5 w-full">View Seeds</Button>
              </NavLink>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-56 ml-o mr-auto">
              <p>Plant</p>
              <Button className="block  my-5 w-full">View Plants</Button>
            </div>
          </div>
        </div>
      </>
  );
};

export default UserDashboard;
