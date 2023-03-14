import { Request, Response } from "express";
import { v4 as uuid } from 'uuid'

import User from "../models/User";

export const signIn = async (req: Request, res: Response) => {
  const type = req.query.type;
  const cpf = req.params.cpf;
  const user = await User.findOne({ cpf, type });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const type = req.query.type;
  const cpf = req.params.cpf;
  const user = req.body;
  const id = uuid();
  const newUser = new User({
    ...user,
    type,
    cpf,
    id,
  })
  try {
    await User.create(newUser);
    res.status(201).json({ message: "User created", user: newUser });
  } catch(err) {
  }
};
