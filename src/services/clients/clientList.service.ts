import { FileClient } from "./../../entities/fileClient.entity";
import AppDataSource from "../../data-source";
import { formatDateToString } from "../../utils/formatDate";

const clientFileListService = async () => {
	const fileClientRepository = AppDataSource.getRepository(FileClient);
	const allFileClients = await fileClientRepository.find({
		relations: {
			clients: true,
		},
	});
	const allFileClientsWithDateString = allFileClients.map((file) => {
		let clients = file.clients.map((client) => {
			const DateToString = formatDateToString(client.birthDate);
			return { ...client, birthDate: DateToString };
		});
		return { ...file, clients };
	});
	return allFileClientsWithDateString;
};

export default clientFileListService;
