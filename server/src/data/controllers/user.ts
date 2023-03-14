import { Request, Response } from "express";
import User from "../models/User";

export const getAllBarbers = async (req: Request, res: Response) => {
  const barbers = await User.find({ type: "barber" });
  res.status(200).json(barbers);
};

export const getAllClients = async (req: Request, res: Response) => {
  const clients = await User.find({ type: "client" });
  res.status(200).json(clients);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findById({ id: req.params.id});
  res.status(200).json(user);
};

// export const createUser = async (req: Request, res: Response) => {
//   const user = await User.create(req.body.user);
//   res.status(201).json(user);
// };

// export const updateUser = async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const user = await User.findByIdAndUpdate(id, req.body.user);
//   res.status(201).json(user);
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   const id = req.params.id;
//   await User.findByIdAndDelete(id);
//   res.status(201).json({ message: "User deleted" });
// };
