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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewSeedsAdmin = () => {
  const [seedData, setSeedData] = useState(null);
  const [couter, setCounter] = useState(0);
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
  }, [couter]);

  const handleDelete = (id) => {
    axios
      .delete(`${apiUrl}/seeds/${id}`)
      .then((response) => {
        console.log(response.data);
        setCounter((prev) => prev + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <TableHead className="text-right"></TableHead>
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
                  <TableCell className="text-right">{`$ ${data.cost}`}</TableCell>
                  <TableCell className="text-center">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-red-800 hover:bg-red-400 text-white hover:text-white">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            {`Are you sure to delete ${data.name}?`}
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              handleDelete(data.id);
                            }}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
};
export default ViewSeedsAdmin;
