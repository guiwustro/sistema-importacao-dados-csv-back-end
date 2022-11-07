import { Operator } from "./operator.entity";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FileClient } from "./fileClient.entity";

@Entity("clients")
export class Client {
	@PrimaryGeneratedColumn("increment")
	id: string;

	@Column()
	name: string;

	@Column()
	birthDate: Date;

	@Column({ type: "decimal", precision: 8, scale: 2 })
	value: number;

	@Column()
	email: string;

	@ManyToOne(() => Operator, (operator) => operator.clients, { nullable: true })
	operator: Operator;

	@ManyToOne(() => FileClient, (file) => file.clients)
	fileClient: FileClient;
}
