// Data base entity for book

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Book" })
export class BookEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar" })
	title: string;

	@Column({ type: "varchar" })
	author: string;

	@Column({ type: "int" })
	sellingPrice: number;

	@Column({ type: "int" })
	purchasePrice: number;
}
