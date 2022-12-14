import { Request, Response } from "express";
import clientDeleteService from "../../services/clients/clientDelete.service";

const clientDeleteController = async (req: Request, res: Response) => {
	const { id } = req.params;
	await clientDeleteService(id);
	return res.status(204).send();
};

export default clientDeleteController;
