import { createService, getBarberScheduledServices, getClientScheduledServices } from "@/data/controllers";
import { Router } from "express";

const serviceRoutes = async (router: Router) => {
  router.post("/services", createService);

  router.get("/barber-services/:barberId", getBarberScheduledServices);

  router.get("/client-services/:clientId", getClientScheduledServices);
};

export default serviceRoutes;
