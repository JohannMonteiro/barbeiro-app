import express from "express";
import cors from "cors";

import { apiRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());

apiRoutes(app);

export { app };
