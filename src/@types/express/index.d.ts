import * as express from "express";
import { IClient } from "../../controllers/clients/clientCreate.controller";

declare global {
	namespace Express {
		interface Request {
			clients: IClient[];
		}
	}
}
