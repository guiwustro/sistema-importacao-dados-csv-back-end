import { FileClient } from "./../../entities/fileClient.entity";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

const clientDeleteService = async (id: string) => {
	const clientRepository = AppDataSource.getRepository(Client);
	const fileClientRepository = AppDataSource.getRepository(FileClient);
	const clients = await clientRepository.find({
		relations: {
			fileClient: true,
		},
	});
	const clientsWithParmsId = clients.filter(
		(client) => client.fileClient.id.toString() === id
	);

	for (let i = 0; i < clientsWithParmsId.length; i++) {
		const clientId = clientsWithParmsId[i].id;
		await clientRepository.delete({ id: clientId });
	}

	await fileClientRepository.delete({ id });
};

export default clientDeleteService;
