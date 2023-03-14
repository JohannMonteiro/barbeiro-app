import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import Service from "../models/Service";

export const createService = async (req: Request, res: Response) => {
  const id = uuid();
  const newService = {
    ...req.body,
    id,
  };
  try {
    const service = await Service.create(newService);
    res.status(201).json(service);
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};

export const getServiceByQueryParams = async (req: Request, res: Response) => {
  const service = await Service.findOne(req.query);
  res.status(200).json(service);
};
