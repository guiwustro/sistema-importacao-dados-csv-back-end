import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
// Many clients > one operator

@Entity("operators")
export class Operator {
	@PrimaryGeneratedColumn("increment")
	id: string;

	@Column()
	name: string;

	@OneToMany(() => Client, (clients) => clients.operator)
	clients: Client[];
}
