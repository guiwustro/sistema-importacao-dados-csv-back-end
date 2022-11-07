import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { Operator } from "../../../entities/operator.entity";

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

	test("POST /operators -  Must be able to create an operator", async () => {
		const mockedOperator = { name: "Operador 1" };
		const response = await request(app).post("/operators").send(mockedOperator);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("name");
		expect(response.status).toBe(201);
	});

	test("POST /operators - Should not be able to create a operator without a name", async () => {
		const mockedOperatorError = {};
		const response = await request(app)
			.post("/operators")
			.send(mockedOperatorError);

		expect(response.status).toBe(400);
	});

	test("GET /operators - Must be able to list all operators", async () => {
		const response = await request(app).get("/operators");

		expect(response.body[0]).toHaveProperty("id");
		expect(response.body[0]).toHaveProperty("name");
		expect(response.body[0]).toHaveProperty("clients");
	});

	//extra
	test("POST /operators - Should be divide all operators clients again when a new operator is added", async () => {
		await request(app)
			.post("/clients")
			.attach("file", "src/__tests__/mocks/clientsMock.csv");
		const mockedOperator = { name: "Operador 2" };
		const operatorTwoRes = await request(app)
			.post("/operators")
			.send(mockedOperator);
		const operatorId = operatorTwoRes.body.id;
		const operatorRepository = AppDataSource.getRepository(Operator);
		const operator2 = await operatorRepository.findOne({
			where: {
				id: operatorId,
			},
			relations: {
				clients: true,
			},
		});
		expect(operator2?.clients).toHaveLength(6);

		// add a new operator
		const mockedOperatorThree = { name: "Operador 3" };
		const operatorThreeRes = await request(app)
			.post("/operators")
			.send(mockedOperatorThree);
		const operatorThreeId = operatorThreeRes.body.id;

		const operatorThree = await operatorRepository.findOne({
			where: {
				id: operatorThreeId,
			},
			relations: {
				clients: true,
			},
		});
		expect(operatorThree?.clients).toHaveLength(4);
	});

	test("DELETE /operators/:id - Must be able to delete an operator", async () => {
		const operatorRepository = AppDataSource.getRepository(Operator);

		const operators = await operatorRepository.find({});
		const operatorId = operators[0].id;

		const res = await request(app).delete(`/operators/${operatorId}`);

		const operatorDeleted = await operatorRepository.findOneBy({
			id: operatorId,
		});

		expect(res.status).toBe(204);
		expect(operatorDeleted).toBe(null);
	});
});
