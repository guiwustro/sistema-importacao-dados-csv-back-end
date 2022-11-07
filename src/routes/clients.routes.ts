import { Router } from "express";
import multer from "multer";
import clientCreateController from "../controllers/clients/clientCreate.controller";
import clientDeleteController from "../controllers/clients/clientDelete.controller";
import clientFileListController from "../controllers/clients/clientFileList.controller";
import importClientMiddleware from "../middlewares/importClient.middleware";
import { AppError } from "../errors/appError";

const routes = Router();

const upload = multer({
	dest: "./tmp",
});

routes.post(
	"",
	upload.single("file"),
	async (req, res, next) => {
		const { file } = req;
		if (!file) throw new AppError("File not found");
		const files = await importClientMiddleware(file!);
		req.clients = files;
		next();
	},
	clientCreateController
);
routes.delete("/file/:id", clientDeleteController);
routes.get("/file", clientFileListController);

export default routes;
