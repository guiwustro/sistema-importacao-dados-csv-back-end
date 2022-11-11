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
				port: 3306,
				host: process.env.HOST_LOCAL,
				username: process.env.USER_LOCAL,
				password: process.env.PASSWORD_LOCAL,
				database: process.env.DATABASE_LOCAL,
				// url: process.env.CLEARDB_ROSE_URL,
		  }
);

export default AppDataSource;
