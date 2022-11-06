import { Router } from "express";
import operatorCreateController from "../controllers/operators/operatorCreate.controller";
import operatorListController from "../controllers/operators/operatorList.controller";

const routes = Router();

routes.post("", operatorCreateController);
routes.get("", operatorListController);
routes.patch("/:id");
routes.delete("/:id");

export default routes;
