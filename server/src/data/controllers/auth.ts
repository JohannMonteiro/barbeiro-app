import { Request, Response } from "express";
import { v4 as uuid } from 'uuid'

import User from "../models/User";

export const signIn = async (req: Request, res: Response) => {
  const type = req.query.type;
  const cpf = req.params.cpf;
  try {
    const user = await User.findOne({ cpf, type });
    if (user){
      return res.status(200).json(user);
    }
    return res.status(404).json({ message: "User not found" });
  } catch(err){
    console.log(err)
    return res.status(500).json({ message: "Server error" });
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
