import { Operator } from "./../../entities/operator.entity";
import { IOperator } from "../../controllers/operators/operatorCreate.controller";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const operatorCreateService = async ({
	name,
}: IOperator): Promise<IOperator> => {
	const operatorRepository = AppDataSource.getRepository(Operator);

	const clientRepository = AppDataSource.getRepository(Client);

	const allClients = await clientRepository.find({});

	const operator = new Operator();
	operator.name = name;
	operatorRepository.create(operator);
	const operatorCreated = await operatorRepository.save(operator);

	const allOperators = await operatorRepository.find({});

	const numberOfOperators = allOperators.length;
	let actualOperator = 0;

	for (let i = 0; i < allClients.length; i++) {
		const client = allClients[i];
		if (actualOperator === numberOfOperators) actualOperator = 0;
		client.operator = allOperators[actualOperator];
		await clientRepository.save(client);
		actualOperator++;
	}

	const newOperator = await operatorRepository.findOneBy({
		id: operatorCreated.id,
	});

	return newOperator!;
};

export default operatorCreateService;
