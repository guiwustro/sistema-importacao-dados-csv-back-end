import { Request, Response } from "express";
import { FileClient } from "../../entities/fileClient.entity";
import clientCreateService from "../../services/clients/clientCreate.service";
import { IOperator } from "./clientFileList.controller";

export interface IClient {
	id?: string;
	name: string;
	birthDate: Date;
	value: number;
	email: string;
	operator?: IOperator;
	fileClient?: FileClient;
}
const clientCreateController = async (req: Request, res: Response) => {
	const clients = req.clients;

	const newClients = await clientCreateService(clients);
	return res.status(201).json(newClients);
};

export default clientCreateController;
