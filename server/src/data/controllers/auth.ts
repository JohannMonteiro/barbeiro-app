import { Request, Response } from "express";
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
  const newUser = new User({
    ...user,
    type,
    cpf,
  })
  console.log('====================================');
  console.log(newUser);
  console.log('====================================');
  try {
    await newUser.save();
    res.status(201).json({ message: "User created", user: newUser });
  } catch(err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }
};
