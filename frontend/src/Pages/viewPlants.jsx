import Navbar from "../Navbar/Navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewPlants = () => {
  const [seedData, setSeedData] = useState(null);
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/plants`)
      .then((response) => {
        setSeedData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error GETting data:", error);
      });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="m-5">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Plant ID</TableHead>
              <TableHead>Plant Name</TableHead>
              <TableHead>Plant Category</TableHead>
              <TableHead>Plant Height</TableHead>
              <TableHead>Plant Cost</TableHead>
              <TableHead>Plant Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {seedData != null &&
              seedData.map((data, id) => {
                return (
                  <TableRow key={data.id}>
                    <TableCell className="font-medium">{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell>{data.plantHeight}</TableCell>
                    <TableCell>{`₹ ${data.cost}`}</TableCell>
                    <TableCell>{data.plantsStock}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default ViewPlants;
