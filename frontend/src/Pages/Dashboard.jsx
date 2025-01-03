import Navbar from "../Navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router";
const Dashboard = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [plantName, setPlantName] = useState();
  const [plantType, setPlantType] = useState();
  const [plantCost, setPlantCost] = useState();

  const handlePlantSubmit = () => {
    const payload = { name: plantName, category: plantType, cost: plantCost };

    axios
      .post(`${apiUrl}/seeds`, payload)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="flex p-5 gap-28">
        <div className="flex-1">
          <div className="w-56 ml-auto mr-0">
            <p>Seed</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="block  my-5 w-full">Add Seed</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Seed</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Plant Name
                    </Label>
                    <Input
                      onChange={(e) => {
                        setPlantName(e.target.value);
                      }}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Category
                    </Label>
                    <Input
                      onChange={(e) => {
                        setPlantType(e.target.value);
                      }}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Cost
                    </Label>
                    <Input
                      onChange={(e) => {
                        setPlantCost(e.target.value);
                      }}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handlePlantSubmit}>Upload</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <NavLink to="/viewSeeds">
            <Button className="block  my-5 w-full">View Seeds</Button>
            </NavLink>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-56 ml-o mr-auto">
            <p>Plant</p>
            <Button className="block  my-5 w-full">Add Plant</Button>
            <Button className="block  my-5 w-full">View Plants</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
