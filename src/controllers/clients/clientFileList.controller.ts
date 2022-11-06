import { Request, Response } from "express";
import operatorListService from "../../services/operators/operatorList.service";

export interface IOperator {
	id?: string;
	name: string;
}
const clientFileListController = async (req: Request, res: Response) => {
	const allClients = await operatorListService();
	return res.status(200).json(allClients);
};

export default clientFileListController;
//extra!
