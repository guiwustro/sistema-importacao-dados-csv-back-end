import { FileClient } from "../../../entities/fileClient.entity";
import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";

describe("/clients", () => {
	let connection: DataSource;
	beforeAll(async () => {
		await AppDataSource.initialize()
			.then((res) => {
				connection = res;
			})
			.catch((err) => {
				console.error("Error during Data Source initialization", err);
			});
		const mockedOperator = { name: "Guilherme" };
		await request(app).post("/operators").send(mockedOperator);
	});

	afterAll(async () => {
		await connection.destroy();
	});

	test("POST /clients - Must be able to create new clients", async () => {
		const res = await request(app)
			.post("/clients")
			.attach("file", "src/__tests__/mocks/clientsMock.csv");
		expect(res.status).toBe(201);
		expect(res.body[0]).toHaveProperty("name");
		expect(res.body[0]).toHaveProperty("birthDate");
		expect(res.body[0]).toHaveProperty("value");
		expect(res.body[0]).toHaveProperty("email");
		expect(res.body[0]).toHaveProperty("fileClient");
		expect(res.body[0]).toHaveProperty("id");
		expect(res.body[0]).toHaveProperty("operator");
		expect(res.body).toHaveLength(12);
	});

	test("DELETE /clients/file/:id - Must be able to delete all clients of a specific file", async () => {
		const createClients = await request(app)
			.post("/clients")
			.attach("file", "src/__tests__/mocks/clientsMock.csv");
		const fileClientId = createClients.body[0].fileClient.id;

		await request(app).delete(`/clients/file/${fileClientId}`);

		const fileClientRepository = AppDataSource.getRepository(FileClient);
		const allFiles = await fileClientRepository.find({});
		const fileDeleted = allFiles.find((file) => +file.id === +fileClientId);

		expect(fileDeleted).toBe(undefined);
	});
});
