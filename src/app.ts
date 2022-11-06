import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import operatorsRoutes from "./routes/operator.routes";
import clientsRoutes from "./routes/clients.routes";

const app = express();
app.use(express.json());

app.use("/operators", operatorsRoutes);
app.use("/clients", clientsRoutes);

app.use(handleErrorMiddleware);

export default app;
