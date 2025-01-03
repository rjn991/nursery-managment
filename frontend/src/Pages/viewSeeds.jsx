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

const viewSeeds = () => {
  const [seedData, setSeedData] = useState(null);
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/seeds`)
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
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Seed ID</TableHead>
            <TableHead>Seed Name</TableHead>
            <TableHead>Seed Category</TableHead>
            <TableHead className="text-right">Seed cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seedData!=null && seedData.map((data, id) => {
            return (
              <TableRow key={data.id}>
                <TableCell className="font-medium">{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.category}</TableCell>
                <TableCell className="text-right">{`$ ${data.cost}`}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
export default viewSeeds;
