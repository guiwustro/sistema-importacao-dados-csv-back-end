import { Operator } from "./operator.entity";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// Many clients > one operator

@Entity("client")
export class Client {
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

	@ManyToOne(() => Operator, (operator) => operator.clients)
	operator: Operator;
}
// nome, nascimento, valor, email
// Cliente 01, 25/05/1985, 042.42, cliente01@teste.com.br
// Cliente 02, 04/05/1973, 153.73, cliente02@teste.com.br
// Cliente 03, 20/08/1977, 282.11, cliente03@teste.com.br
// Cliente 04, 31/10/1981, 967.29, cliente04@teste.com.br
// Cliente 05, 18/11/1984, 835.39, cliente05@teste.com.br
// Cliente 06, 09/10/1985, 335.52, cliente06@teste.com.br
// Cliente 07, 12/05/1990, 373.86, cliente07@teste.com.br
// Cliente 08, 05/10/1992, 908.19, cliente08@teste.com.br
// Cliente 09, 02/04/1998, 943.71, cliente09@teste.com.br
