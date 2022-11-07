import { Operator } from "./../../entities/operator.entity";

import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const operatorDeleteService = async (id: string) => {
	const operatorRepository = AppDataSource.getRepository(Operator);
	const clientRepository = AppDataSource.getRepository(Client);
	const allOperators = await operatorRepository.find({
		relations: {
			clients: true,
		},
	});
	const operatorToDelete = allOperators.find(
		(operator) => operator.id.toString() === id
	);

	const allAvailableOperators = allOperators.filter(
		(operator) => operator.id != id
	);

	let actualOperator = 0;
	const numberOfOperators = allAvailableOperators.length;

	const clientNumber = operatorToDelete?.clients.length;

	for (let i = 0; i < (clientNumber || 0); i++) {
		const client = await clientRepository.findOneBy({
			id: operatorToDelete?.clients[i].id,
		});
		console.log(client, "client");

		if (actualOperator === numberOfOperators) actualOperator = 0;

		client!.operator = allAvailableOperators[actualOperator];

		await clientRepository.save(client!);
		actualOperator++;
	}
	console.log(allOperators);
	// redistribuir clients
	await operatorRepository.delete({ id });
};

export default operatorDeleteService;
