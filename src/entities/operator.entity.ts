import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
// Many clients > one operator

@Entity("operator")
export class Operator {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column()
	birthDate: Date;

	@Column({ type: "decimal", precision: 8, scale: 2 })
	value: number;

	@Column()
	email: string;

	@OneToMany(() => Client, (clients) => clients.operator)
	clients: Client[];
}
