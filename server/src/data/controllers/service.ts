import { Request, Response } from "express";
import Service from "../models/Service";

export const createService = async (req: Request, res: Response) => {
  const service = await Service.create(req.body);
  res.status(201).json(service);
};

export const getServiceByQueryParams = async (req: Request, res: Response) => {
  const service = await Service.findOne(req.query);
  res.status(200).json(service);
};
