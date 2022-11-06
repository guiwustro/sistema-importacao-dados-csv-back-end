import { Request, Response } from "express";
import operatorCreateService from "../../services/operators/operatorCreate.service";

export interface IOperator {
	id?: string;
	name: string;
}
const operatorCreateController = async (req: Request, res: Response) => {
	const operatorData: IOperator = req.body;
	const newOperator = await operatorCreateService(operatorData);
	return res.status(201).json(newOperator);
};

export default operatorCreateController;
