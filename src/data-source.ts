import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
	process.env.NODE_ENV === "test"
		? {
				type: "sqlite",
				database: ":memory:",
				entities: ["src/entities/*.ts"],
				synchronize: true,
		  }
		: {
				type: "mysql",
				url: process.env.DATABASE_URL,
				ssl:
					process.env.NODE_ENV === "production"
						? { rejectUnauthorized: false }
						: false,
				logging: true,
				synchronize: false,
				entities:
					process.env.NODE_ENV === "production"
						? ["dist/src/entities/*.js"]
						: ["src/entities/*.ts"],
				migrations:
					process.env.NODE_ENV === "production"
						? ["dist/src/migrations/*.js"]
						: ["src/migrations/*.ts"],
				host: "us-cdbr-east-06.cleardb.net",
				port: 3306,
				username: "ba0a79ede1d720",
				password: "451d8d5f",
				database: "heroku_f6b6e35aee30eb7",

				// host: "localhost",
				// port: 3306,
				// username: "root",
				// password: "password",
				// database: "import-csv-db",
		  }
);

// const AppDataSource = new DataSource(
// 	process.env.NODE_ENV === "test"
// 		? {
// 				type: "sqlite",
// 				database: ":memory:",
// 				synchronize: true,
// 				entities: ["src/entities/*.ts"],
// 		  }
// 		: {
// type: "mysql",
// host: "localhost",
// port: 3306,
// username: "root",
// password: "password",
// database: "import-csv-db",
// logging: true,
// synchronize: false,
// 				entities:
// 					process.env.NODE_ENV === "production"
// 						? ["dist/src/entities/*.js"]
// 						: ["src/entities/*.ts"],
// 				migrations:
// 					process.env.NODE_ENV === "production"
// 						? ["dist/src/migrations/*.js"]
// 						: ["src/migrations/*.ts"],
// 		  }
// );

export default AppDataSource;
