import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";

describe("/operators", () => {
	let connection: DataSource;

	beforeAll(async () => {
		await AppDataSource.initialize()
			.then((res) => {
				connection = res;
			})
			.catch((err) => {
				console.error("Error during Data Source initialization", err);
			});
	});

	afterAll(async () => {
		await connection.destroy();
	});

	test("POST /operators -  Must be able to create a operator", async () => {
		const mockedOperator = { name: "Guilherme" };
		const response = await request(app).post("/operators").send(mockedOperator);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("name");
		expect(response.status).toBe(201);
	});

	test("POST /operators - Should not be able to create a operator without a name", async () => {});

	test("GET /operators - Must be able to list all operators", async () => {});

	//extra
	test("POST /operators - Should be divide all operators clients again when a new operator is added", async () => {});

	test("DELETE /operators/:id - Must be able to delete a operator", async () => {});

	test("DELETE /operators/:id - Should not be able to delete a operator with an invalid id", async () => {});
});
