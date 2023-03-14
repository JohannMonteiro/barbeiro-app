import { createService, getServiceByQueryParams } from "@/data/controllers";
import { Router } from "express";

const serviceRoutes = async (router: Router) => {
  router.post("/services", createService);

  router.get("/services", getServiceByQueryParams);
};

export default serviceRoutes;
