import { Request, Response } from "express";
import operatorDeleteService from "../../services/operators/operatorDelete.service";

const operatorDeleteController = async (req: Request, res: Response) => {
	const { id } = req.params;
	await operatorDeleteService(id);
	return res.status(204).send();
};

export default operatorDeleteController;
