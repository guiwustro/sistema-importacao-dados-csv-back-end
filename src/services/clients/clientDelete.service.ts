import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const clientDeleteService = async (id: string) => {
	const clientRepository = AppDataSource.getRepository(Client);
	await clientRepository.delete({ id });
};

export default clientDeleteService;
