import { signIn, signUp } from "@/data/controllers";
import { Router } from "express";

const serviceRoutes = async (router: Router) => {
  router.post("/services", signIn);

  router.get("/services", signUp);
};

export default serviceRoutes;
