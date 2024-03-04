import AppDataSource from "../db/db.config";
import { BookEntity } from "../entities/book.entity";

export default class BookRepo {
	public static data: BookEntity[] = [];

	public static findAll() {
		return AppDataSource.getRepository(BookEntity).find();
	}

	public static findById(id: number) {
		return AppDataSource.getRepository(BookEntity).findOne({ where: { id } });
	}

	public static deleteById(id: number) {
		return AppDataSource.getRepository(BookEntity).delete(id);
	}
	public static add(book: BookEntity) {
		return AppDataSource.getRepository(BookEntity).save(book);
	}
	public static updateById(id: number, book: BookEntity) {
		return AppDataSource.getRepository(BookEntity).update(id, book);
	}
}
