import fs from "fs";
import { IClient } from "../controllers/clients/clientCreate.controller";

import csvParse from "csv-parser";

/**
 * Pass an object and return a object with all keys into lowercase
 */
const toLowerKeys = (obj: any) => {
	return Object.keys(obj).reduce((accumulator: any, key) => {
		accumulator[key.toLowerCase()] = obj[key];
		return accumulator;
	}, {});
};

const importClientMiddleware = (
	file: Express.Multer.File
): Promise<IClient[]> => {
	return new Promise((resolver, reject) => {
		const stream = fs.createReadStream(file.path);
		const parseFile = csvParse();

		stream.pipe(parseFile);

		const clients: IClient[] = [];
		parseFile
			.on("data", async (line) => {
				const client = toLowerKeys(line);

				const { nome, nascimento, valor, email } = client;

				const day = nascimento.split("/")[0];
				const month = nascimento.split("/")[1];
				const year = nascimento.split("/")[2];

				const birthDate = new Date(year, month, day);

				clients.push({
					name: nome,
					birthDate,
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

export default importClientMiddleware;
