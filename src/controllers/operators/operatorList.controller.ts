import { Request, Response } from "express";
import operatorListService from "../../services/operators/operatorList.service";

export interface IOperator {
	id?: string;
	name: string;
}
const operatorListController = async (req: Request, res: Response) => {
	const allOperators = await operatorListService();
	return res.status(200).json(allOperators);
};

export default operatorListController;
