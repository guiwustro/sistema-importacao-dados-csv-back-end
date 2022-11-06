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

const loadClients = (file: Express.Multer.File): Promise<IClient[]> => {
	return new Promise((resolver, reject) => {
		const stream = fs.createReadStream(file.path);
		const parseFile = csvParse();

		stream.pipe(parseFile);

		const clients: IClient[] = [];
		parseFile
			.on("data", async (line) => {
				/**
				 * Pass an object and return a object with all keys into lowercase
				 */
				const toLowerKeys = (obj: any) => {
					return Object.keys(obj).reduce((accumulator: any, key) => {
						accumulator[key.toLowerCase()] = obj[key];
						return accumulator;
					}, {});
				};
				const client = toLowerKeys(line);

				const { nome, nascimento, valor, email } = line;
				clients.push({
					name: nome,
					birthDate: nascimento,
					value: valor,
					email: email,
				});
			})
			.on("end", () => {
				resolver(clients);
			})
			.on("error", (err) => {
				reject(err);
			});
	});
};

// create clients route - should insert data into the db;
// routes.post("", clientCreateController);
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
routes.get("", clientFileListController);
//should remove a bunch of clients with the same ID
routes.delete("/:file_id", clientDeleteController);

export default routes;
