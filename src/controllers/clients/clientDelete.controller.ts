import { Request, Response } from "express";
import clientDeleteService from "../../services/operators/operatorDelete.service";

const clientDeleteController = async (req: Request, res: Response) => {
	const { id } = req.params;
	await clientDeleteService(id);
	return res.status(204);
};

export default clientDeleteController;
