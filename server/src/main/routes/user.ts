import {
  getAllBarbers,
  // createUser,
  // deleteUser,
  getAllClients,
  getUserById,
  // updateUser,
} from "@/data/controllers";
import { Router } from "express";

const usersRoutes = async (router: Router) => {
  router.get("/barbers", getAllBarbers);

  router.get("/clients", getAllClients);

  router.get("/users/:id", getUserById);
};

export default usersRoutes;
