import { Router } from "express";
import multer from "multer";
import fs from "fs";
import clientCreateController, {
	IClient,
} from "../controllers/clients/clientCreate.controller";
import clientDeleteController from "../controllers/clients/clientDelete.controller";
import clientFileListController from "../controllers/clients/clientFileList.controller";
import csvParse from "csv-parser";
import importClientMiddleware from "../middlewares/importClient.middleware";

const routes = Router();

const upload = multer({
	dest: "./tmp",
});

routes.post(
	"",
	upload.single("file"),
	async (req, res, next) => {
		const { file } = req;
		const files = await importClientMiddleware(file!);
		req.clients = files;
		next();
	},
	clientCreateController
);
routes.delete("/file/:id", clientDeleteController);
routes.get("/file", clientFileListController);

export default routes;
