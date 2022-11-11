import { insertData } from "./data/insert.data";
import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
	await AppDataSource.initialize()
		.then(() => {
			insertData();
		})
		.catch((err) => {
			console.error("Error during Data Source initialization", err);
		});

	app.listen(process.env.PORT || 3001, () => {
		console.log("Servidor executando");
	});
})();
