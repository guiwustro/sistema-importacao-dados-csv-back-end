import { Client } from "../entities/client.entity";
import { faker } from "@faker-js/faker";
import AppDataSource from "../data-source";

export const insertData = async () => {
	const clientRepository = AppDataSource.getRepository(Client);

	// número de clientes para adicionar ao data base
	const NUMBER_OF_CLIENTS_TO_ADD = 100;

	for (let i = 0; i < NUMBER_OF_CLIENTS_TO_ADD; i++) {
		const name = faker.name.fullName();
		const birthDate = faker.date.birthdate();
		const value = +faker.finance.amount(100, 600);
		const email = faker.internet.email();
		const newClient = {
			name,
			email,
			birthDate,
			value,
		};
		clientRepository.create(newClient);
		await clientRepository.save(newClient);
	}
};
