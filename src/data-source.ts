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
				host:
					process.env.NODE_ENV === "production"
						? process.env.HOST_PROD
						: process.env.HOST_LOCAL,
				username:
					process.env.NODE_ENV === "production"
						? process.env.USER_PROD
						: process.env.USER_LOCAL,
				password:
					process.env.NODE_ENV === "production"
						? process.env.PASSWORD_PROD
						: process.env.PASSWORD_LOCAL,
				database:
					process.env.NODE_ENV === "production"
						? process.env.DATABASE_PROD
						: process.env.DATABASE_LOCAL,
		  }
);

export default AppDataSource;
