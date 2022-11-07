import { Operator } from "./../../entities/operator.entity";
import { IOperator } from "../../controllers/operators/operatorCreate.controller";
import AppDataSource from "../../data-source";

const operatorListService = async (): Promise<IOperator[]> => {
	const operatorRepository = AppDataSource.getRepository(Operator);
	const allOperators = await operatorRepository.find({
		relations: {
			clients: true,
		},
	});
	const operatorsWithStringDate = allOperators.map((operator) => {
		const clients = operator.clients;
		const updatedClients = clients.map((client) => {
			const year = client.birthDate.getFullYear();
			let month = (client.birthDate.getMonth() + 1).toString();
			if (+month < 10) month = "0" + month;
			let day = client.birthDate.getDate().toString();
			if (+day < 10) day = "0" + day;
			const stringDate = `${day}/${month}/${year}`;
			return { ...client, birthDate: stringDate };
		});

		return { ...operator, clients: updatedClients };
	});

	return operatorsWithStringDate;
};

export default operatorListService;
