import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class FileClient {
	@PrimaryGeneratedColumn("increment")
	id: string;

	@Column()
	name: string;

	@OneToMany(() => Client, (clients) => clients.fileClient)
	clients: Client[];
}
