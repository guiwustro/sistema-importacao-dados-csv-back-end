import { Operator } from "./../../entities/operator.entity";
import { IOperator } from "../../controllers/operators/operatorCreate.controller";
import AppDataSource from "../../data-source";
import { formatDateToString } from "../../utils/formatDate";

const operatorListService = async (): Promise<IOperator[]> => {
	const operatorRepository = AppDataSource.getRepository(Operator);
	const allOperators = await operatorRepository.find({
		relations: {
			clients: true,
		},
	});
	const operatorsWithStringDate = allOperators.map((operator) => {
		const clients = operator.clients;
		const updatedClients = clients
			.map((client) => {
				const stringDate = formatDateToString(client.birthDate);
				return { ...client, birthDate: stringDate };
			})
			.sort((a, b) => +a.id - +b.id);

		return { ...operator, clients: updatedClients };
	});

	return operatorsWithStringDate;
};

export default operatorListService;
