import { IClient } from "../../controllers/clients/clientCreate.controller";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Operator } from "../../entities/operator.entity";

const clientCreateService = async (clients: IClient[]) => {
	const clientRepository = AppDataSource.getRepository(Client);
	const operatorRepository = AppDataSource.getRepository(Operator);
	const allOperators = await operatorRepository
		.find({
			relations: {
				clients: true,
			},
		})
		.then((res) => res.sort((a, b) => a.clients.length - b.clients.length));
	const numberOfOperators = allOperators.length;

	const allClients: Client[] = [];

	let actualOperator = 0;
	for (let i = 0; i < clients.length; i++) {
		const client = clients[i];
		if (actualOperator === numberOfOperators) actualOperator = 0;
		client.operator = allOperators[actualOperator];
		console.log(client);
		clientRepository.create(client);
		const newClient = await clientRepository.save(client);
		allClients.push(newClient);
		actualOperator++;
	}

	const clientsReturn = allClients.map((client) => {
		const removeClientsOperatorObj = {
			id: client.operator.id,
			name: client.operator.name,
		};
		const clientObj = { ...client, operator: removeClientsOperatorObj };

		return clientObj;
	});

	return clientsReturn;
};

export default clientCreateService;
