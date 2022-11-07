import { Request, Response } from "express";
import clientFileListService from "../../services/clients/clientList.service";

export interface IOperator {
	id?: string;
	name: string;
}
const clientFileListController = async (req: Request, res: Response) => {
	const allFileClients = await clientFileListService();
	return res.status(200).json(allFileClients);
};

export default clientFileListController;
