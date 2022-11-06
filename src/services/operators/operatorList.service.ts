import { Operator } from "./../../entities/operator.entity";
import { IOperator } from "../../controllers/operators/operatorCreate.controller";
import AppDataSource from "../../data-source";

const operatorListService = async (): Promise<IOperator[]> => {
	const operatorRepository = AppDataSource.getRepository(Operator);
	const allOperators = operatorRepository.find({
		relations: {
			clients: true,
		},
	});
	return allOperators;
};

export default operatorListService;
