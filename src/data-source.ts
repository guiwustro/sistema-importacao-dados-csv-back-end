import { DataSource } from "typeorm";
import "dotenv/config";
// const mysql = require("mysql2");
let mysql = require("mysql");

// const AppDataSource = new DataSource(
// 	process.env.NODE_ENV === "test"
// 		? {
// 				type: "sqlite",
// 				database: ":memory:",
// 				synchronize: true,
// 				entities: ["src/entities/*.ts"],
// 		  }
// 		: {
// 				type: "mysql",
// 				url: process.env.DATABASE_URL,
// 				ssl:
// 					process.env.NODE_ENV === "production"
// 						? { rejectUnauthorized: true }
// 						: { rejectUnauthorized: true },
// 				logging: true,
// 				synchronize: false,
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

const AppDataSource = new DataSource(
	process.env.NODE_ENV === "test"
		? {
				type: "sqlite",
				database: ":memory:",
				synchronize: true,
				entities: ["src/entities/*.ts"],
		  }
		: {
				type: "mysql",
				host: "localhost",
				port: 3306,
				username: "root",
				password: "password",
				database: "import-csv-db",
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
		  }
);

export default AppDataSource;
