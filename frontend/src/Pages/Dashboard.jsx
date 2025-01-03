import Navbar from "../Navbar/Navbar";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex p-5 gap-28">
        <div className="flex-1">
          <div className="w-56 ml-auto mr-0">
            <p>Plant</p>
            <Button className="block  my-5 w-full">Add Plant</Button>
            <Button className="block  my-5 w-full">View Plants</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-56 ml-o mr-auto">
            <p>Seed</p>
            <Button className="block  my-5 w-full">Add Seed</Button>
            <Button className="block  my-5 w-full">View Seeds</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
