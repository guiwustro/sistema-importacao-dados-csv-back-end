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
	test("POST /clients - Must be able to create new clients", async () => {});

	//extra - this test should verify when a bunch of clients are  deleted the operators should be updated also in the db
	test("DELETE /clients/file/:id - Must be able to delete all clients of a specific file", async () => {});
});
