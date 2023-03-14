import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import Service from "../models/Service";

export const createService = async (req: Request, res: Response) => {
  const id = uuid();
  const newService = {
    ...req.body,
    id,
  };
  console.log('====================================');
  console.log(newService);
  console.log('====================================');
  try {
    const service = await Service.create(newService);
    res.status(201).json(service);
  } catch (err) {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  }
};

export const getClientScheduledServices = async (req: Request, res: Response) => {
  const { clientId } = req.params;
  const services = await Service.find({ clientId });
  res.status(200).json(services);
};

export const getBarberScheduledServices = async (req: Request, res: Response) => {
  const { barberId } = req.params;
  const services = await Service.find({ barberId });
  res.status(200).json(services);
};
