import { signIn, signUp } from "@/data/controllers";
import { Router } from "express";

const authRoutes = async (router: Router) => {
  router.post("/sign-in/:cpf", signIn);

  router.post("/sign-up/:cpf", signUp);
};

export default authRoutes;
